export const browserStackCapabilities = [
  // windows
  {
    browserName: 'Edge',
    'wdio-ics:options': {
      logName: 'win-edge',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'win-chrome',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  {
    browserName: 'Firefox',
    'wdio-ics:options': {
      logName: 'win-firefox',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'Windows',
      osVersion: '11'
    }
  },
  // macOS
  {
    browserName: 'Safari',
    'wdio-ics:options': {
      logName: 'osx-safari',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'osx-chrome',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  {
    browserName: 'Firefox',
    'wdio-ics:options': {
      logName: 'osx-firefox',
    },
    'bstack:options': {
      idleTimeout: 300,
      resolution: '1920x1080',
      browserVersion: 'latest',
      os: 'OS X',
      osVersion: 'Sequoia'
    }
  },
  // iOS
  {
    browserName: 'Safari',
    'wdio-ics:options': {
      logName: 'ios-safari',
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'iPhone 16',
      osVersion: '18'
    }
  },
  {
    browserName: 'Chrome',
    'wdio-ics:options': {
      logName: 'ios-chrome',
    },
    'bstack:options': {
      idleTimeout: 300,
      deviceOrientation: 'portrait',
      deviceName: 'iPhone 16',
      osVersion: '18'
    }
  }
]
