import { browser } from '@wdio/globals'
import {
  continueJourney,
  enterValueFor,
  selectOption,
  selectOptions,
  startJourney
} from '../journey-actions.js'

describe('Adding Value', () => {
  it('should analyse accessibility on all Adding Value pages', async () => {
    await browser.url('/adding-value/start')

    // start
    await startJourney()

    // what-is-your-business
    await selectOption(
      'A grower or producer of agricultural or horticultural produce'
    )
    await continueJourney()

    // what-is-the-legal-status-of-the-business
    await selectOption('Sole trader')
    await continueJourney()

    // is-the-planned-project-in-england
    await selectOption('Yes')
    await continueJourney()

    // what-is-the-estimated-cost-of-the-items
    await enterValueFor('62500', 'Enter amount')
    await continueJourney()

    // can-you-pay-the-remaining-costs
    await selectOption('Yes')
    await continueJourney()

    // products-processed
    await selectOption('Arable produce')
    await continueJourney()

    // adding-value
    await selectOption('Introducing a new product to your farm')
    await continueJourney()

    // project-impact
    await selectOptions([
      'Increasing range of added-value products',
      'Increasing volume of added-value products'
    ])
    await continueJourney()

    // future-customers
    await continueJourney()

    // collaboration
    await continueJourney()

    // environmental-impact
    await continueJourney()
  })
})
