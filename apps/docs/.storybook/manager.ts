import { addons } from '@storybook/manager-api'

addons.setConfig({
  sidebar: {
    showRoots: false,
    collapsedRoots: [],
  },
  panelPosition: 'right',
  enableShortcuts: false,
  showToolbar: false,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'canvas',
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
})
