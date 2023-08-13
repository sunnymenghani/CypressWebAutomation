class AddToDoListPage{

    /*
        This method will allow to enter to do list
    */
    enterToDoList(toDoList){
        cy.get("#new-todo-input").type(toDoList);
    }

    /*
        This method click on the "Add New Task" button
    */
    addNewTaskButton(){
        cy.get("#new-todo-submit").click();
    }

    /*
        This method will click on the edit button of the to do list
    */
    toDoListEditButton(){
        cy.get('.edit').click();
    }

    /*
        This method will allow to edit the to do list
    */
        editToDoListText(newToDoListText){
            cy.get('.text').type(newToDoListText);
        }

    /*
        This method will click on the save button after editing
    */
        editSaveButton(){
            cy.get('.edit').click();
        }
        
        /*
        This method will confirm to delete added to do list
        */
        todoDeleteConfirmation(){
            cy.get('.swal2-confirm').click();
        }    

}

export default AddToDoListPage;