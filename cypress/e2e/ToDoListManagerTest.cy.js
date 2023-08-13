import AddToDoListPage from "../PageObjects/AddToDoListPage.js"

const page = new AddToDoListPage ();

describe("To Do List Manager Test Suite", ()=> {

  // This will open the website before each test
  beforeEach(() => {
      cy.fixture('example').then((fixtureData)=>{
        const url = fixtureData.url;

        // Below line of code will open the website in the browser.
        cy.visit(url);

        //Below line of code will do assert the url
        cy.url().should('include','todo-app');
        cy.url().should('eq',url);

        //Below line of code will validate the Tittle after opening the website
        cy.get('h1').should('have.text','TO-DO APP');

      })

    });


    /*
      This it block will add the task
    */
    it('Add Task' , ()=>{
      cy.fixture('example').then((fixtureData)=>{
        //Below line of code will add New Task
        page.enterToDoList(fixtureData.addTask);
        page.addNewTaskButton();

      })

      //Below line of code will get the length of the to do list after adding it
      cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div").should('have.length',"1");
    })

    
    /*
      This it block edit the added task
    */
    it('Edit Task', ()=>{
      const task = "Add Task on 12 August for editing";
      const editTask = " edit the task after adding";

      cy.fixture('example').then((fixtureData)=>{
        //Below line of code will add New Task
        page.enterToDoList(fixtureData.addTask);
        page.addNewTaskButton();

        //Below line of code will click on the "Edit" button to edit the addded task
        page.toDoListEditButton();
        page.editToDoListText(fixtureData.editTask);

        //Below line of code edit the added task and save
        page.editSaveButton();
        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div").should('have.length',"1");

      })

    })

    /*
      This it block delete the added task from Tasks List
    */
      it('Delete Added Task', ()=> {
        cy.fixture('example').then((fixtureData)=>{
          //Below line of code will add new task
          page.enterToDoList(fixtureData.addTask);
          page.addNewTaskButton();
  
        })
  
        //Below line of code will click on delete button to delete task
        cy.get('.delete').click();
  
        //Below link of code will confirm the alert to delete the task.
        cy.get('.swal2-confirm').click();
  
        //Below line of code validate the message written on confirmation delete popup
        cy.get('#swal2-title').should('have.text','Deleted!');
  
        //Below line of code accept confirmation popup and task will be deleted
        cy.get('.swal2-confirm').click();
      })

    /*
      This it block add the task and mark that task as Done
    */
    it('Mark Added Task as Completed', ()=>{
      cy.fixture('example').then((fixtureData)=>{
        //Below line of code will add New Task
        page.enterToDoList(fixtureData.addTask);
        page.addNewTaskButton();

      })

      //Below line of code will mark the task as Done
      cy.get('.fa').click();

      //Below line of code will check the length of the added task
      cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(4) > div").should('have.length',"1");
    })

    /*
      This it block add the task and mark that task as Done and delete
    */
      it('Mark Added Task as Completed and Delete', ()=>{
        cy.fixture('example').then((fixtureData)=>{
          //Below line of code will add New Task
          page.enterToDoList(fixtureData.addTask);
          page.addNewTaskButton();
  
        })
  
        //Below line of code will mark the task as Done
        cy.get('.fa').click();
  
        //Below line of code will check the length of the added task
        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(4) > div").should('have.length',"1");

        cy.get('.delete').click();

        //Below link of code will confirm the alert to delete the task.
        cy.get('.swal2-confirm').click();
  
        //Below line of code validate the message written on confirmation delete popup
        cy.get('#swal2-title').should('have.text','Deleted!');
  
        //Below line of code accept confirmation popup and task will be deleted
        cy.get('.swal2-confirm').click();
      })

    /*
      This it block check it should not allow to add task without entering any details
    */
    it('Try to addd nil task and dismiss popup', ()=>{
      //Below line of code directly click on "Add New Task" button without entering Task Details
      page.addNewTaskButton();

      //Below two lines of code will check error popup come when try to click add task button without providing any value.
      cy.get('#swal2-title').should('have.text',"Oops...");
      cy.get('#swal2-html-container').should('have.text',"Please add new task!");

      //Below command close the alert window
      cy.get("button[class='swal2-confirm swal2-styled']").click();
    })

    /*
      This it block will add the big task
    */
      it('Add Big Task' , ()=>{
        cy.fixture('example').then((fixtureData)=>{
          //Below line of code will add New Task
          page.enterToDoList(fixtureData.bigTaskDetails);
          page.addNewTaskButton();
  
        })
  
        //Below line of code will get the length of the to do list after adding it
        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div").should('have.length',"1");

        //Below line of code will click on delete button to delete task
        cy.get('.delete').click();

        //Below link of code will confirm the alert to delete the task.
        cy.get('.swal2-confirm').click();

        //Below line of code validate the message written on confirmation delete popup
        cy.get('#swal2-title').should('have.text','Deleted!');

        //Below line of code accept confirmation popup and task will be deleted
        cy.get('.swal2-confirm').click();
      })


})