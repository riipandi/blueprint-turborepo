import { useNavigate } from 'react-router'
import Link from '#/components/link'
import { errorStyles } from './error.css'

export function NotFound() {
  const navigate = useNavigate()
  const styles = errorStyles()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className={styles.wrapper()}>
      <div className={styles.decorativeGradient()}>
        <div className={styles.gradientInner()}>
          <div className={styles.gradientBg()} />
        </div>
      </div>
      <div className={styles.decorativeCode()}>
        <h2 className={styles.decorativeText()}>404</h2>
      </div>
      <div className={styles.content()}>
        <div className={styles.container()}>
          <p className={styles.errorCode()}>404</p>
          <h1 className={styles.title()}>Page not found</h1>
          <pre className={styles.pre()}>
            <code className={styles.code()}>
              Sorry, we couldn't find the page you're looking for.
            </code>
          </pre>
          <div className={styles.actions()}>
            <button type="button" onClick={handleBack} className={styles.primaryButton()}>
              Go back
            </button>
            <Link href="#" className={styles.secondaryButton()}>
              Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InternalError() {
  const navigate = useNavigate()
  const styles = errorStyles()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className={styles.wrapper()}>
      <div className={styles.decorativeGradient()}>
        <div className={styles.gradientInner()}>
          <div className={styles.gradientBg()} />
        </div>
      </div>
      <div className={styles.decorativeCode()}>
        <h2 className={styles.decorativeText()}>500</h2>
      </div>
      <div className={styles.content()}>
        <div className={styles.container()}>
          <p className={styles.errorCode()}>500</p>
          <h1 className={styles.title()}>Internal Server Error</h1>
          <p className={styles.description()}>An unexpected error occurred</p>
          <pre className={styles.pre()}>
            <code className={styles.code()}>
              Sorry, we couldn't process your request. Please try again later.
            </code>
          </pre>
          <div className={styles.actions()}>
            <button type="button" onClick={handleBack} className={styles.primaryButton()}>
              Go back
            </button>
            <Link href="#" className={styles.secondaryButton()}>
              Troubleshooting Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
