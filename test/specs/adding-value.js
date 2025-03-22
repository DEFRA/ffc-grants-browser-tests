import Actor from '../screenplay/Actor.js'
import Click from '../screenplay/tasks/Click.js'
import Ensure from '../screenplay/tasks/Ensure.js'
import Enter from '../screenplay/tasks/Enter.js'
import Navigate from '../screenplay/tasks/Navigate.js'
import Select from '../screenplay/tasks/Select.js'

describe('Adding Value', () => {
  it('should complete Adding Value journey', async () => {
    const agent = new Actor()

    await agent.attemptsTo([
      Navigate.to('/adding-value/start'),

      // start
      Ensure.screenMatchesDesign(),
      Ensure.url().is('start'),
      Ensure.heading().is('Check if you can apply for a Farming Transformation Fund Adding Value Grant'),
      Click.on('Start now'),

      // what-is-your-business
      Ensure.screenMatchesDesign(),
      Select.option('A grower or producer of agricultural or horticultural produce'),
      Click.on('Continue'),

      // what-is-the-legal-status-of-the-business
      Ensure.screenMatchesDesign(),
      Select.option('Sole trader'),
      Click.on('Continue'),

      // is-the-planned-project-in-england
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Click.on('Continue'),

      // what-is-the-estimated-cost-of-the-items
      Ensure.screenMatchesDesign(),
      Enter.value(62500).for('Enter amount'),
      Click.on('Continue'),

      // can-you-pay-the-remaining-costs
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Click.on('Continue'),

      // products-processed
      Ensure.screenMatchesDesign(),
      Select.option('Arable produce'),
      Click.on('Continue'),

      // adding-value
      Ensure.screenMatchesDesign(),
      Select.option('Introducing a new product to your farm'),
      Click.on('Continue'),

      // project-impact
      Ensure.screenMatchesDesign(),
      Select.options([
        'Increasing range of added-value products',
        'Increasing volume of added-value products'
      ]),      
      Click.on('Continue'),

      // future-customers
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // collaboration
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // environmental-impact
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // score-results
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // business-details
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // who-is-applying-for-this-grant
      Ensure.screenMatchesDesign(),
      Select.option('Agent'),
      Click.on('Continue'),

      // agent-details
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
      Enter.value('Northamptonshire').for('County'),
      Enter.value('NN7 3NN').for('Postcode'),
      Click.on('Continue'),

      // applicant-details
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
      Enter.value('Northamptonshire').for('County'),
      Enter.value('NN7 1NN').for('Business postcode'),
      Enter.value('NN7 2NN').for('Project postcode'),
      Click.on('Continue'),

      // check-your-details
      Ensure.screenMatchesDesign(),
      Click.on('Continue'),

      // declaration
      Ensure.screenMatchesDesign(),
      Click.on('Confirm and send'),

      // confirmation
      Ensure.screenMatchesDesign()
    ])
  })
})
