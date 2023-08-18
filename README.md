# CypressWebAutomation
Cypress Automation Project to Automate Web Application using POM Pattern.

In this Trying to automate "Add To Do List Application" Test Scenarios.

To run cypress automation spec file, below are the steps:-

Pre-requisites:-

1) Node.js should be installed in the system and configured environment variables for that.
2) VS Code or other such kind of IDE should be installed.

Steps to install Cypress:-

1) Clone this repository to your local machine.
2) Open the project in VS Code.
3) Open the terminal of VS code and install cypress by running (npm install cypress --save -dev)

To run the script following are the ways in cypress:- 

enter any of the below commands in vs code terminal
1) npx cypress open

   (Select E2E option ->Select browser -> Select Spec File under "E2E Specs")

2) npx cypress run (This will run headless mode)
   
3) npx cypress run --headed --browser chrome --spec "cypress\e2e\ToDoListManagerTest.cy.js"

    (this will run on chrome browser headed mode)

Execution Report :- 
After executing the spec file, you will be able to view the HTML report and video in the "Cypress->reports->index.html" directory.
