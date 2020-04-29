# sinbad-atweb-test
AT Web for Sinbad Test

### How to Getting Started:

```sh
$ git clone "url this project"
$ cd cypresswithcucumber
$ npm install
$ cp .env.example .env
```
If the 'cp' command cannot run, just make a .env file and copy-paste from .env.example file

### How to Run:

- use `test` to upload the report on cypress dashboard
- use `cypress` for local testing (not uploading the report)

```sh
$ npm run cypress                                   | All test
$ npm run cypress -- -e TAGS='@test'                | Only scenario with tag @test (somehow cannot run this command)
$ npm run cypress -- -e TAGS='' --browser chrome    | Launch the browser (unfortunately somehow cannot run in windows)
$ npm run cypress-ui                                | Open the Cypress Desktop from node_modules
```

### About the assignment

For each problem I create file .feature with total of 5 scenario (plus 1 in problem A). 
For the [Must Have] section I have created Scenario Outline for Search City (problem A) and for Verify the Visa Invoice (problem B).

Here is the example for the Search City test case:
```sh
@guestUser @useCase1 @searchName
  Scenario Outline: As a Guest User, I should be able to search Hotels in a City
    Given I go to PHPtravel homepage
    When I input "<city>" in search destination field
    And I click the add Child button once
    And I click the Search button
    Then I can see the result of Hotels list in "<city>"

    Examples:
    |city       |
    |surabaya   |
    |bandung    |
```

For the reporting I use the Cypress Desktop/Dashboard. So after each run using `npm run test`, the result is uploaded to my Cypress Project. The report can also be viewed by login to Cypress website and go to https://dashboard.cypress.io/projects/mj1hti/runs (this is my own Cypress dashboard)
    ![cypress-report](cypress/img/cypress report.png)

For the [Good to Have] the Cypress Window has the setup to choose which browser do you want to use to run the test. The weakness is Cypress only show the list of browsers in your machine. Unfortunately for the command line, it somehow won't work with windows by using `--browser chrome`
    ![cypress-browser-select](cypress/img/cypress window browser select.png)
    The Electron is browser built-in by Cypress

And for the result. All of my tests failed successfully, and I still can't find the solution of the problem.
    ![cypress-error](cypress/img/cypress error.png)
    ![cypress-browser-select](cypress/img/cypress error2.png)
That's all I got. I'm sorry
