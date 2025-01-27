# syntax=docker/dockerfile:1.7

# Arguments with default value (for build).
ARG PLATFORM=linux/amd64
ARG NODE_VERSION=20

# Turborepo Remote Caching
ARG TURBO_TEAM TURBO_TOKEN

FROM busybox:1.37-glibc as glibc
FROM joseluisq/static-web-server:2-debian as httpserver

# -----------------------------------------------------------------------------
# Base image with pnpm package manager.
# -----------------------------------------------------------------------------
FROM --platform=${PLATFORM} node:${NODE_VERSION}-bookworm-slim AS base
ENV PNPM_HOME="/pnpm" PATH="$PNPM_HOME:$PATH" COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable && corepack prepare pnpm@latest-9 --activate
WORKDIR /srv

# -----------------------------------------------------------------------------
# Extract the monorepo and generate a partial monorepo with a pruned lockfile.
# -----------------------------------------------------------------------------
FROM base AS builder
ENV PNPM_HOME="/pnpm" PATH="$PNPM_HOME:$PATH" CI=true
ENV LEFTHOOK=0 PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=true

# Install system dependencies.
RUN apt-get update && apt-get -yqq --no-install-recommends install tini
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install -g turbo@latest

# Copy the source files
COPY --link --chown=node:node . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
# Assuming "web" is the name entered in the project's package.json: { name: "web" }
RUN turbo prune web --docker

# -----------------------------------------------------------------------------
# Install dependencies and build the application.
# -----------------------------------------------------------------------------
FROM base AS installer
ENV TURBO_TEAM=$TURBO_TEAM TURBO_TOKEN=$TURBO_TOKEN

# Install the dependencies (as they change less often)
COPY --from=builder /srv/out/json/ .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --ignore-scripts

# Build the project
COPY --from=builder /srv/out/full/ .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store NODE_ENV=production pnpm build

# -----------------------------------------------------------------------------
# Production image, copy build output files and run the application (runner).
# -----------------------------------------------------------------------------
# FROM --platform=${PLATFORM} gcr.io/distroless/nodejs${NODE_VERSION}-debian12
FROM --platform=${PLATFORM} gcr.io/distroless/base-debian12

# ----- Read application environment variables --------------------------------

ARG APP_LOG_LEVEL APP_SECRET_KEY APP_BASE_URL APP_DOMAIN DATABASE_URL

# ----- Read application environment variables --------------------------------

# Copy the build output files from the installer stage.
COPY --chown=nonroot:nonroot --from=installer /srv/apps/web/dist /srv

# Copy the static web server from the httpserver stage.
COPY --from=httpserver /usr/local/bin/static-web-server /usr/local/bin/

# Copy some necessary system utilities from previous stage (~7MB).
# To enhance security, consider avoiding the copying of sysutils.
COPY --from=builder /usr/bin/tini /usr/bin/tini
COPY --from=glibc /bin/clear /bin/clear
COPY --from=glibc /bin/mkdir /bin/mkdir
COPY --from=glibc /bin/which /bin/which
COPY --from=glibc /bin/cat /bin/cat
COPY --from=glibc /bin/ls /bin/ls
COPY --from=glibc /bin/sh /bin/sh

# Define the host and port to listen on.
ARG NODE_ENV=production SERVER_HOST=0.0.0.0 SERVER_PORT=3000
ENV SERVER_HOST=$SERVER_HOST SERVER_PORT=$SERVER_PORT
ENV NODE_ENV=$NODE_ENV TINI_SUBREAPER=true
STOPSIGNAL SIGQUIT

WORKDIR /srv
USER nonroot:nonroot
EXPOSE $SERVER_PORT

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["/usr/local/bin/static-web-server", "-d", "/srv", "--page-fallback", "/srv/index.html"]

# -----------------------------------------------------------------------------
# Container metadata: https://docs.docker.com/engine/manage-resources/labels
# -----------------------------------------------------------------------------
LABEL org.opencontainers.image.source="https://github.com/riipandi/blueprint-turborepo"
