# Team profile generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Installing and running](#installing-and-running)
  - [Built with](#built-with)
  - [Continued development](#continued-development)



## Overview

### The challenge

Creating a command line app that generates a html file displaying a team profile based on user input

### Screenshot

![](./assets/images/Screenshot%202023-03-02%20203738.png)
![](./assets/images/Screenshot%202023-03-02%20204758.png)



### Installing and running

You will need to install node to run the app, then initialize npm and install inquirer

To start she app simply run 'node index.js' and answer the questions to generate your team profile page




### Built with

- node.js
- npm inquirer





```js
 let {managerName, managerId, managerEmail, officeNumber, newEmployee} = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "Enter team manager's name",
    },

```


### Continued development

At the current state the app does not offer you to add new employee after adding the first engineer or intern.
I am figuring out how to use that prompt in a function to make it reusable

