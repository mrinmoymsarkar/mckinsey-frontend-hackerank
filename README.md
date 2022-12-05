# Javascript: List View 
Complete a partially completed JavaScript list view application. Complete the application as shown below in order to pass all the unit tests.

## Environment 

- Node Version: ^12.18.3
- Default Port: 8000

## Application Demo: 

![](https://hrcdn.net/s3_pub/istreet-assets/aVFqwkIjbm1f7V1PCjXHQg/list-view.gif)

The application consists of four elements:
- List display section: The section on the page where the list will be displayed.
- Text field: A field to provide input for inserting a new element into the list.
- "Insert" button: A button for inserting a new element into the list.
- Alert: An error alert with the message "Please provide the valid input" that appears on invalid input .
 

The application has the following functionalities:

- Initially, the error alert should not be displayed. It appears upon pressing the "Insert" button if the input is empty or only spaces. It disappears once a new item is successfully inserted.
- A new item should be added to the list on clicking the "Insert" button if the value in the input field is not empty.
- The alert box should be removed from the DOM by adding the style 'display: none' if a new item is added to the list.
- When an element is inserted, the text field value is reset.
- Every third element in the list must be displayed in red and the remaining elements in black.
 

NOTE: Please add your Javascript in the src/js/script.js file.

The following id attributes are required in the application for the tests to pass:

- The input field has the id attribute 'input'.
- The "Insert" button has the id attribute 'button'.
- The list element has the id attribute 'list'.
- The alert element has the id attribute 'alert'.
 

Please note that the index.html file has certain classes and ids for rendering and testing purposes. It is advised not to change this file or the CSS file.

## Project Specifications

**Read Only Files**
- `test/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
