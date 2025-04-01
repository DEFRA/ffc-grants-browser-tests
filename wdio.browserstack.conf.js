import fs from 'node:fs'
import { ProxyAgent, setGlobalDispatcher } from 'undici'
import { bootstrap } from 'global-agent'

const dispatcher = new ProxyAgent({
  uri: 'http://localhost:3128'
})
setGlobalDispatcher(dispatcher)
bootstrap()
global.GLOBAL_AGENT.HTTP_PROXY = 'http://localhost:3128'

export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_KEY,
  baseUrl: `https://forms-runner-v2.${process.env.ENVIRONMENT}.cdp-int.defra.cloud`,
  runner: 'local',
  specs: ['./test/specs/*.js'],
  exclude: [],
  maxInstances: 1,
  commonCapabilities: {
    'bstack:options': {
      buildName: `ffc-grants-browser-tests-${process.env.ENVIRONMENT}`
    }
  },
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        idleTimeout: 300,
        resolution: '1920x1080',
        browserVersion: 'latest',
        os: 'Windows',
        osVersion: '11'
      }
    }
  ],
  services: [
    [
      'browserstack', {
        testObservability: true,
        testObservabilityOptions: {
          user: process.env.BROWSERSTACK_USERNAME,
          key: process.env.BROWSERSTACK_KEY,
          projectName: 'ffc-grants-browser-tests',
          buildName: `ffc-grants-browser-tests-${process.env.ENVIRONMENT}`
        },
        acceptInsecureCerts: true,
        forceLocal: false,
        browserstackLocal: true,
        opts: {
          proxyHost: 'localhost',
          proxyPort: 3128
        }
      }
    ]
  ],
  execArgv: ['--loader', 'esm-module-alias/loader'],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  waitforInterval: 200,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    [
      'spec',
      {
        addConsoleLogs: true,
        realtimeReporting: true,
        color: false
      }
    ],
    [
      'allure',
      {
        outputDir: 'allure-results'
      }
    ]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (error) {
      await browser.takeScreenshot()
    }
  },
  onComplete: function (exitCode, config, capabilities, results) {
    // !Do Not Remove! Required for test status to show correctly in portal.
    if (results?.failed && results.failed > 0) {
      fs.writeFileSync('FAILED', JSON.stringify(results))
    }
  }
}
