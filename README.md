# Welcome to our Cardiologs **coding challenge**.

The main goal of this interview is for us to assess your level of expertise in the Front-End ecosystem, but also to understand your developer habits and evaluate your coding skills!
If it is a match, this is fantastic!! You are a step closer to be part of the team!! :blush:

We offer 3 options during the Technical Interview: 
 1. **Coding** a small web application
 2. **Code reviewing** of an existing code base
 3. **Open format** share some of the code you have developed and you are excited to discuss during the tech interview

In all this 3 options it is important for us to have access of your technical interview code **BEFORE** the interview meeting, so we have time to review your work and prepare some constructive feedback! 
The goal is for all of us to learn from each others.  

## Share with us
If you are using a private repository on GitHub, add us as a collaborator (`buenjybar` and `baptooo`) so we can read your code.

Otherwise share us your code in a zip file ( using this `git archive --format zip --output /full/path/to/zipfile.zip master` )

# Option 1: Coding

In this option we are going to code a small Web Application to help the Nurse to better manage the patient flow in the hospital.  

During this session of ~2-4h, we will evaluate your coding skills on multiple aspects!!
It is important to read all the instructions before to start your chrono ⏱!.

### Instructions
We are trying to build a Triage Patient's cards that can move cards from the _Todo_ column to the _Done_ column
  - Fetch the patient cards using our local server [instructions](#Server)
  - Display the patient cards in the corresponding column (_Pending_ + _Rejected_ and _Done_)
  - Allow user to change the card status from _Pending_ or _Rejected_ to _Done_ and from _Done_ to _Rejected_.
  - Add a local filtering by patient name and arrhythmia.
  
A particular attention will be taken to your Code Structure, your ability to express data models and UX-UI components structure.

### Requirements
You can choose **any** of the following solution, but we expect to have a clean file structure on your final project.

Set up your project with one of our project CLI recommendations
- Angular [cli](https://cli.angular.io/)
- React [reactApp](https://create-react-app.dev/docs/getting-started/)
- VueJS [vuecli](https://cli.vuejs.org/)
- Vanilla

Of course, you are free to use any of the **CSS naming** convention / methodology, or any **testing** libraries other than the one provided by the CLI.

### Design specs
Because no feature is developed without a nice pseudo-design, here is a quick sketch of how we think we can display the list. 

![alt text][design]


### Let's Go! Be **creative** !!

### Bonus points
- UI/UX design
- Writing unit tests
- CSS animations
- Using Typescript

### Server
How to use it?
Here is a simple instruction on how to set up your local server for the project

1. First, install the node dependencies
    `npm install`

2. Setup your app

    You can use any project generator you want, the only requirement is to place sources under `./app` and having a `start` script inside of the `package.json` file

3. Run the local API server and your app script
    `npm start`

4. With everything set up, you can now access the list of cards with the following URL:
    `GET http://localhost:3000/cards`


### Timing
*Don't forget to share with us the time you have spent on this project.*
![alt text][rabbit]


Feel free to give us your feedback on this Homework, we will be more than happy to adapt it :blue_heart:.


# Option 2: Code reviewing

You can jump to the `codereview/` folder and install the packages.

You can fork this project and add some more commits to Fix / Improve the existing Homework.

Don't forget to share your code with our Technical Interview reviewers [here](#share-with-us)

# Option 3: Share your code

You have written some nice code in the open source world (contributor of a librairy, a personal project...) 

Let's talk about it during our interview!

Please don't forget to share your **code**, functions or anything related so we can understand the context and being able to run the code :wink:



## And of course HAVE FUN!!
![alt text][sponge]


[design]: https://github.com/CardioLogs/card-triage/raw/master/images/design.png
[sponge]: https://github.com/CardioLogs/card-triage/raw/master/images/sponge.gif
[rabbit]: https://github.com/CardioLogs/card-triage/raw/master/images/wonderland.gif
