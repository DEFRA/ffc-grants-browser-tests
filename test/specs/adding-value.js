import Actor from '../screenplay/actor.js'
import Confirm from '../screenplay/tasks/confirm.js'
import Continue from '../screenplay/tasks/continue.js'
import Ensure from '../screenplay/tasks/ensure.js'
import Enter from '../screenplay/tasks/enter.js'
import Maximise from '../screenplay/tasks/maximise.js'
import Navigate from '../screenplay/tasks/navigate.js'
import Select from '../screenplay/tasks/select.js'
import Start from '../screenplay/tasks/start.js'
import Unselect from '../screenplay/tasks/unselect.js'

describe('Adding Value', () => {
  it('should complete application journey', async () => {
    const agent = new Actor()

    await agent.attemptsTo(
      Maximise.browser(),
      Navigate.to('/adding-value/start'),

      // start
      Ensure.url().is('start'),
      Ensure.heading().is('Check if you can apply for a Farming Transformation Fund Adding Value Grant'),
      Ensure.screenMatchesDesign(),
      Start.journey(),

      // nature-of-business
      Ensure.url().is('nature-of-business'),
      Ensure.heading().is('What is your business?'),
      Ensure.screenMatchesDesign(),
      Select.option('None of the above'),
      Continue.journey(),

      // cannot-apply-nature-of-business
      Ensure.url().is('cannot-apply-nature-of-business'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // nature-of-business
      Ensure.url().is('nature-of-business'),
      Select.option('A grower or producer of agricultural or horticultural produce'),
      Continue.journey(),

      // legal-status
      Ensure.url().is('legal-status'),
      Ensure.heading().is('What is the legal status of the business?'),
      Ensure.screenMatchesDesign(),
      Select.option('None of the above'),
      Continue.journey(),

      // legal-status-cannot-apply
      Ensure.url().is('legal-status-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // legal-status
      Ensure.url().is('legal-status'),
      Select.option('Sole trader'),
      Continue.journey(),

      // country
      Ensure.url().is('country'),
      Ensure.heading().is('Is the planned project in England?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey(),

      // cannot-apply-country
      Ensure.url().is('cannot-apply-country'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // country
      Ensure.url().is('country'),
      Select.option('Yes'),
      Continue.journey(),

      // planning-permission
      Ensure.url().is('planning-permission'),
      Ensure.heading().is('Does the project have planning permission?'),
      Ensure.screenMatchesDesign(),
      Select.option('Will not be in place by the time I make my full application'),
      Continue.journey(),

      // planning-permission-cannot-apply
      Ensure.url().is('planning-permission-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // planning-permission
      Ensure.url().is('planning-permission'),
      Select.option('Should be in place by the time I make my full application'),
      Continue.journey(),

      // planning-permission-may-apply
      Ensure.url().is('planning-permission-may-apply'),
      Ensure.heading().is('You may be able to apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // project-start
      Ensure.url().is('project-start'),
      Ensure.heading().is('Have you already started work on the project?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes, we have begun project work'),
      Continue.journey(),

      // cannot-apply-project-start
      Ensure.url().is('cannot-apply-project-start'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // project-start
      Ensure.url().is('project-start'),
      Select.option('Yes, preparatory work'),
      Continue.journey(),

      // tenancy
      Ensure.url().is('tenancy'),
      Ensure.heading().is('Is the planned project on land the business owns?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey(),

      // tenancy-length
      Ensure.url().is('tenancy-length'),
      Ensure.heading().is('Do you have a tenancy agreement for 5 years after the final grant payment?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey(),

      // may-apply-tenancy-length
      Ensure.url().is('may-apply-tenancy-length'),
      Ensure.heading().is('You may be able to apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // smaller-abattoir
      Ensure.url().is('smaller-abattoir'),
      Ensure.heading().is('Do you want to build a new smaller abattoir?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'), // take top fruit journey
      Continue.journey(),

      // fruit-storage
      Ensure.url().is('fruit-storage'),
      Ensure.heading().is('Do you want to build new controlled atmosphere storage for top fruit?'),
      Ensure.screenMatchesDesign(),
      Navigate.back(), // navigate back to smaller abattoir journey

      // smaller-abattoir
      Ensure.url().is('smaller-abattoir'),
      Select.option('Yes'), // take smaller abattoir journey
      Continue.journey(),

      // other-farmers
      Ensure.url().is('other-farmers'),
      Ensure.heading().is('Will this abattoir provide services to other farmers?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey(),

      // cannot-apply-other-farmers
      Ensure.url().is('cannot-apply-other-farmers'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // other-farmers
      Ensure.url().is('other-farmers'),
      Select.option('Yes'),
      Continue.journey(),

      // project-items
      Ensure.url().is('project-items'),
      Ensure.heading().is('What eligible items does your project need?'),
      Ensure.screenMatchesDesign(),
      Select.option('None of the above'),
      Continue.journey(),

      // cannot-apply-project-items
      Ensure.url().is('cannot-apply-project-items'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // project-items
      Ensure.url().is('project-items'),
      Unselect.option('None of the above'),
      Select.option('Constructing or improving buildings for processing'),
      Continue.journey(),

      // storage
      Ensure.url().is('storage'),
      Ensure.heading().is('Does your project also need storage facilities?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes, we will need storage facilities'),
      Continue.journey(),

      // project-cost
      Ensure.url().is('project-cost'),
      Ensure.heading().is('What is the estimated cost of the items?'),
      Ensure.screenMatchesDesign(),
      Enter.value('62499').for('Enter amount'),
      Continue.journey(),

      // project-cost-cannot-apply
      Ensure.url().is('project-cost-cannot-apply'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // project-cost
      Ensure.url().is('project-cost'),
      Enter.value('62500').for('Enter amount'),
      Continue.journey(),

      // potential-funding
      Ensure.url().is('potential-funding'),
      Ensure.heading().is('Potential grant funding'),
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // remaining-costs
      Ensure.url().is('remaining-costs'),
      Ensure.heading().is('Can you pay the remaining costs of £37,500?'),
      Ensure.screenMatchesDesign(),
      Select.option('No'),
      Continue.journey(),

      // cannot-apply-remaining-costs
      Ensure.url().is('cannot-apply-remaining-costs'),
      Ensure.heading().is('You cannot apply for a grant from this scheme'),
      Ensure.screenMatchesDesign(),
      Navigate.back(),

      // remaining-costs
      Ensure.url().is('remaining-costs'),
      Select.option('Yes'),
      Continue.journey(),

      // produce-processed
      Ensure.url().is('produce-processed'),
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
      Select.options(
        'Increasing range of added-value products',
        'Increasing volume of added-value products'
      ),
      Continue.journey(),

      // mechanisation
      Ensure.url().is('mechanisation'),
      Ensure.heading().is('Will this project use any mechanisation instead of manual labour?'),
      Ensure.screenMatchesDesign(),
      Select.option('Yes'),
      Continue.journey(),

      // manual-labour-amount
      Ensure.url().is('manual-labour-amount'),
      Ensure.heading().is('How much manual labour will the mechanisation be equal to?'),
      Ensure.screenMatchesDesign(),
      Select.option('More than 10%'),
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
      // Ensure.heading().is('Business details'), [TO BE FIXED]
      Ensure.screenMatchesDesign(),
      Continue.journey(),

      // applying
      Ensure.url().is('applying'),
      Ensure.heading().is('Who is applying for this grant?'),
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

      // check-details
      Ensure.url().is('check-details'),
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
    )
  })
})
