import { $, browser } from '@wdio/globals'
import Actor from '../screenplay/actor.js'
import Confirm from '../screenplay/tasks/confirm.js'
import Continue from '../screenplay/tasks/continue.js'
import Ensure from '../screenplay/tasks/ensure.js'
import Enter from '../screenplay/tasks/enter.js'
import Maximise from '../screenplay/tasks/maximise.js'
import Navigate from '../screenplay/tasks/navigate.js'
import Select from '../screenplay/tasks/select.js'
import Start from '../screenplay/tasks/start.js'

describe('Adding Value', () => {
  it('should complete application journey', async () => {
    const agent = new Actor()

    await agent.attemptsTo([
      Maximise.browser(),
      Navigate.to('/adding-value/start'),

      // start
      Ensure.url().is('start'),
      Ensure.heading().is('Check if you can apply for a Farming Transformation Fund Adding Value Grant'),
      Ensure.screenMatchesDesign(),
      Start.journey(),

      // what-is-your-business
      Ensure.url().is('what-is-your-business'),
      Ensure.heading().is('What is your business?'),
      Ensure.screenMatchesDesign(),
      Select.option('A grower or producer of agricultural or horticultural produce'),
      Continue.journey(),

      // what-is-the-legal-status-of-the-business
      Ensure.url().is('what-is-the-legal-status-of-the-business'),
      Ensure.heading().is('What is the legal status of the business?'),
      Ensure.screenMatchesDesign(),
      Select.option('Sole trader'),
      Continue.journey(),

      // is-the-planned-project-in-england
      Ensure.url().is('is-the-planned-project-in-england'),
      Ensure.heading().is('Is the planned project in England?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey(),

      // what-is-the-estimated-cost-of-the-items
      Ensure.url().is('what-is-the-estimated-cost-of-the-items'),
      Ensure.heading().is('What is the estimated cost of the items?'),
      Ensure.screenMatchesDesign(),
      Enter.value(62500).for('Enter amount'),
      Continue.journey(),

      // can-you-pay-the-remaining-costs
      Ensure.url().is('can-you-pay-the-remaining-costs'),
      Ensure.heading().is('Can you pay the remaining costs of £37,500.00?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey(),

      // products-processed
      Ensure.url().is('products-processed'),
      Ensure.heading().is('What type of produce is being processed?'),
      Ensure.screenMatchesDesign(),
      Select.option('Arable produce'),
      Continue.journey(),

      // adding-value
      Ensure.url().is('adding-value'),
      Ensure.heading().is('How will this project add value to the produce?'),
      Ensure.screenMatchesDesign(),
      Select.option('Introducing a new product to your farm'),
      Continue.journey(),

      // project-impact
      Ensure.url().is('project-impact'),
      Ensure.heading().is('What impact will this project have?'),
      Ensure.screenMatchesDesign(),
      Select.options([
        'Increasing range of added-value products',
        'Increasing volume of added-value products'
      ]),      
      Continue.journey(),

      // future-customers
      Ensure.url().is('future-customers'),
      Ensure.heading().is('Who will your new customers be after the project?'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // collaboration
      Ensure.url().is('collaboration'),
      Ensure.heading().is('Will you work in partnership or collaborate with other farmers or producers?'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // environmental-impact
      Ensure.url().is('environmental-impact'),
      Ensure.heading().is('How will this project improve the environment?'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // score-results
      Ensure.url().is('score-results'),
      Ensure.heading().is('Score results'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // business-details
      Ensure.url().is('business-details'),
      Ensure.heading().is('Business Details'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // who-is-applying-for-this-grant
      Ensure.url().is('who-is-applying-for-this-grant'),
      Ensure.heading().is('Who is applying for this grant?'),
      Ensure.screenMatchesDesign(),
      Select.option('Agent'),
      Continue.journey(),

      // agent-details
      Ensure.url().is('agent-details'),
      Ensure.heading().is(`Agent's details`),
      Ensure.screenMatchesDesign(),
      Enter.value('John').for('First name'),
      Enter.value('Test-Agent').for('Last name'),
      Enter.value('Test Agency Ltd').for('Business name'),
      Enter.value('cl-defra-gae-test-agent-email@equalexperts.com').for('Email address'),
      Enter.value('cl-defra-gae-test-agent-email@equalexperts.com').for('Confirm email address'),
      Enter.value('07777 654321').for('Mobile number'),
      Enter.value('01604 654321').for('Landline number'),
      Enter.value('High Street').for('Address line 1'),
      Enter.value('Denton').for('Address line 2 (optional)'),
      Enter.value('Northampton').for('Town'),
      Enter.value('Northamptonshire').for('County (optional)'),
      Enter.value('NN7 3NN').for('Postcode'),
      Continue.journey(),

      // applicant-details
      Ensure.url().is('applicant-details'),
      Ensure.heading().is(`Applicant's details`),
      Ensure.screenMatchesDesign(),
      Enter.value('James').for('First name'),
      Enter.value('Test-Farmer').for('Last name'),
      Enter.value('cl-defra-gae-test-applicant-email@equalexperts.com').for('Email address'),
      Enter.value('cl-defra-gae-test-applicant-email@equalexperts.com').for('Confirm email address'),
      Enter.value('07777 123456').for('Mobile number'),
      Enter.value('01604 123456').for('Landline number'),
      Enter.value('Test Farm').for('Address line 1'),
      Enter.value('Cogenhoe').for('Address line 2 (optional)'),
      Enter.value('Northampton').for('Town'),
      Enter.value('Northamptonshire').for('County (optional)'),
      Enter.value('NN7 1NN').for('Postcode'),
      Enter.value('NN7 2NN').for('Project postcode'),
      Continue.journey(),

      // check-your-details
      Ensure.url().is('check-your-details'),
      Ensure.heading().is('Check your details'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // declaration
      Ensure.url().is('declaration'),
      Ensure.heading().is('Confirm and send'),
      Ensure.screenMatchesDesign(),
      Confirm.andSend(),

      // confirmation
      Ensure.url().is('confirmation'),
      Ensure.heading().is('Details submitted'),
      Ensure.screenMatchesDesign().ignoring('//h1/following-sibling::div[1]/strong') // reference number element
    ])
  })
})
