# CypressWebAutomation
Cypress Automation Project to Automate Web Application using POM Pattern.

In this Trying to automate "Add To Do List Application" Test Scenarios.

**To run cypress automation spec file, below are the steps**:-

**Pre-requisites**:-
Node.js should be installed in the system and configured environment variables for that.
VS Code or other such kind of IDE should be installed.

**Steps to install Cypress**:-
Clone this repository to your local machine.
Open the project in VS Code.
Open the terminal of VS code and install cypress by running (npm install cypress --save -dev)

**To run the script following are the ways in cypress**:- 
enter any of the below commands in vs code terminal
1) npx cypress run (Select E2E option ->Select browser -> Select Spec File under "E2E Specs")
2) npx cypress run --headed --browser chrome --spec "cypress\e2e\ToDoListManagerTest.cy.js" (this will run on chrome browser headed mode)
