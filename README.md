# Portfolio-Project-2 - OSRS quiz

(Developer: Harrison Townend)

<img src="assets/images/readme/am-i-responsive.png"> <br>

[Live website](https://harrisont1.github.io/Portfolio-Project-2/) <br>

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
10. [Credits](#credits)
11. [Acknowledgments](#acknowledgments)

## Project Goals

The main goal of my project is to create an engaging quiz for the game OldSchool Runescape (OSRS).

### User Goals

- To test their knowledge of OSRS and around Gielinor.
- Be able to replay the quiz with different questions and topics.
- Have fun while playing the quiz.

### Site Owner Goals

- Create a game using Javascript to develop skills.
- allow playability across all devices and screen sizes.

## User Experience

### Target Audience

My project has a small player base as it is directed towards one game.

- Typically this will be people from ages 18-40
- Male dominated
- People who play OSRS

### User Requirements and Expectations
1. The user expects:
    1. a simple to use navigation
    2. an easy to play quiz that allows them to test their knowledge.
    3. a form to submit feedback and encourage improvements.

### User Stories

1. As a user, I would like to be able to restart the quiz and select a new topic.
2. As a user, I would like to be able to see my score as I progress through the quiz.
3. As a user, I would like to be easily able to navigation around the website.
4. As a user, I would like to be able to submit my feedback to the developers.
5. As a user, I would like to be know when the form is submitted to minimise confusion.
6. As a user, I would like instructions of how to play the quiz correctly.
7. As a user, I would like a designated home screen for selecting my topic of choice.
8. As a user, I would like to see my final score at the end of the quiz.
9. As a user, I would like to know if my answer was correct or incorrect as the question is answered.

### Site Owner Stories

10. As the owner of the quiz, I would like people to be able to give feedback in the form of an email.

## Design

### Design Choices

I wanted the quiz to be simple however engaging, to achieve this I created a simple see-through window in front of an image from OSRS.

### Colour

The primary colours used in my project were a standard black (#000) and white (#FFF).

<details><summary>Colour palette</summary>
  <img src="assets/images/readme/colour-pallet.png">
</details>
<br>

A small amount of green (#0F0) and red (#F00) were used to display if an answer is correct or incorrect.

### Fonts
The primary font used in my project was imported from Google Fonts - Inter, sans-serif.

<details><summary>Inter - font</summary>
  <img src="assets/images/readme/font-inter.png">
</details>

### Structure
I wanted to use a simple structure in my project, upon loading the user is greeted  with a background image partially covered by a centre tab where the game is played.
- The centre tab consists of a title asking for a topic selection, and 4 options for the user to select from.
- There is a navigation bar at the top of the screen with 3 links.
  1. Home - This redirects the user to the index page (homepage).
  2. Rules - This take the user to a rules tab where they are given directions on how to play the quiz.
  3. Contact us - This is a form which allows the user to send an email directly to the owner.
- there is also a footer at the bottom of the screen.

### Wireframes

The wireframes are very similar to my final project as I decided to change a few small things throughout coding the website, such as font styles.

<details><summary>laptop home screen</summary>
  <img src="assets/images/readme/wireframes/laptop-home-screen.png">
</details>

<details><summary>mobile home screen</summary>
  <img src="assets/images/readme/wireframes/mobile-home-screen.png">
</details>

<details><summary>laptop question screen</summary>
  <img src="assets/images/readme/wireframes/laptop-question-screen.png">
</details>

<details><summary>mobile question screen</summary>
  <img src="assets/images/readme/wireframes/mobile-question-screen.png">
</details>

<details><summary>laptop end screen</summary>
  <img src="assets/images/readme/wireframes/Laptop-quiz-end-screen.png">
</details>

<details><summary>Mobile end screen</summary>
  <img src="assets/images/readme/wireframes/mobile-quiz-end-screen.png">
</details>

## Technologies Used

### Languages
The languages I used were:
- HTML
- CSS
- Javascript

### Frameworks & Tools
The tools I used were:

- Git
- [Github](https://github.com/)
- Github Pages
- [Figma](https://www.figma.com/) (wireframes)
- [Favicon.io](https://favicon.io/) (To create a favicon)
- [EmailJS](https://www.emailjs.com/) (to allow for automatic emails to from the form)
- [JSHint](https://jshint.com/) (Javascript validation)
- [W3C HTML](https://validator.w3.org/) (HTML validation)
- [W3C Jigsaw CSS](https://jigsaw.w3.org/css-validator/) (CSS validation)
- [WaveAim](https://wave.webaim.org/) (Accessibility evaluation)


## Features

### Header

The header includes 3 links to different tabs within the webpage, home, rules and contact us.
- This was implemented for user story: 3

<details><summary>Header</summary>
  <img src="assets/images/readme/features/header.png">
</details>

### Footer

<details><summary>Footer</summary>
  <img src="assets/images/readme/features/footer.png">
</details>

### Start screen

This includes a title asking users to select a topic, it also has 4 options of topics to select.
- This was implemented for user story: 7

<details><summary>Start screen</summary>
  <img src="assets/images/readme/features/start-screen.png">
</details>

### Quiz screen

This is similar to the start screen however is replaced by a question as the title and 4 choice of answers.
- This was implemented for user story: 2

<details><summary>Quiz screen</summary>
  <img src="assets/images/readme/features/question-screen.png">
</details>

### Quiz finish screen

Upon finishing the quiz the user is displayed a button with an option to select a new topic which takes them to the home screen, they are also given their final score for that topic.
- This was implemented for user story: 8, 1

<details><summary>Quiz finish screen</summary>
  <img src="assets/images/readme/features/finish-screen.png">
</details>

### Correct/incorrect guess screen

Upon selected an answer to a question the button turns either green for a correct answer or red for an incorrect answer.
- This was implemented for user story: 9

<details><summary>incorrect guess screen</summary>
  <img src="assets/images/readme/features/selected-answer-screen.png">
</details>

### Contact form

The contact form allows a user to submit details which sends an email to the email linked to the website, this is done using Emailjs.
- This was implemented for user story: 4, 10

<details><summary>Contact form</summary>
  <img src="assets/images/readme/features/contact-form.png">
</details>

### Form confirmation

When a user submits the form they are displayed a message to tell them they correctly submitted the form to prevent confusion.
- This was implemented for user story: 5

<details><summary>Form confirmation</summary>
  <img src="assets/images/readme/features/form-submitted-message.png">
</details>

### Rules screen

This set of rules allows the user to play the quiz correctly to make it more enjoyable.
- This was implemented for user story: 6

<details><summary>Rules screen</summary>
  <img src="assets/images/readme/features/rules-screen.png">
</details>

### 404 message

If a user incorrectly enters the URL to the website they are redirected to a 404 page with a link to the homepage.

<details><summary>404 message</summary>
  <img src="assets/images/readme/features/message-404-screen.png">
</details>

## Validation

### HTML Validation

<details><summary>HTML Validation</summary>
  <img src="assets/images/readme/validation/html-validation.png">
</details>

### CSS Validation

<details><summary>CSS Validation</summary>
  <img src="assets/images/readme/validation/css-validation.png">
</details>

### JavaScript Validation

Emailjs was causing two undefined variables to show, I was unable to define these as they were imported via a script tag.

<details><summary>JavaScript Validation</summary>
  <img src="assets/images/readme/validation/javascript-validation.png">
</details>

### Accessibility

To test accessibility I used WaveAim accessibility evaluation tool.

<details><summary>WaveAim evaluation</summary>
  <img src="assets/images/readme/validation/waveaim.png">
</details>

### Performance 
Both page of my HTML received a very high lighthouse score on Google Chrome.

<details><summary>Index page</summary>
  <img src="assets/images/readme/validation/lighthouse/index-lighthouse.png">
</details>

<details><summary>404 page</summary>
  <img src="assets/images/readme/validation/lighthouse/404-lighthouse.png">
</details>

### Performing tests on various devices 

I tested my website across 3 different screen sizes:

- I phone 11 Pro (375px by 812px)
- Ipad pro (810px by 1080px)
- Television (1920px by 1080px)

The 3 screen sizes are 3 common widths users will be using from phone to tablet to television/laptop.<br>
I did this testing using a feature in Firefox to change the window size to my choice.

### Browser Compatibility

The browsers I tested my website on were:

- Google Chrome
- Firefox
- Microsoft Edge

These are 3 of the main browsers that people commonly use.

### Testing user stories

1. As a user, I would like to be able to restart the quiz and select a new topic.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Reset button after quiz | Click on reset button | Sends the user to homepage | Working |

2. As a user, I would like to be able to see my score as I progress through the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Current score shows below the questions | Answer question correctly | As a question is correctly answered the current score updates | Working |

3. As a user, I would like to be easily able to navigation around the website.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Header with navigation | Click navigation link in the header | Take the user to the selected page | Working |

4. As a user, I would like to be able to submit my feedback to the developers.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Form | Select form in the header and fill in appropriately | Form will submit when submit button is clicked | Working |

5. As a user, I would like to be know when the form is submitted to minimise confusion.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Submission message | Submit form | A message is displayed when form is submitted | Working |

6. As a user, I would like instructions of how to play the quiz correctly.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Rules page | Select rules in the header | A list of rules will show within the homepage tab | Working |

7. As a user, I would like a designated home screen for selecting my topic of choice.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home screen | Upon loading website | The user is presented with the home page with 4 options of quiz | Working |

8. As a user, I would like to see my final score at the end of the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Final score count | Complete quiz | A message is displayed at the end of the quiz with the user's score | Working |

9. As a user, I would like to know if my answer was correct or incorrect as the question is answered.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| instant marking | Answer question | The answer will appear green if correct or red if incorrect | Working |

## Bugs

One warning was showing due to an empty h2 tag, this was due to it being controlled by Javascript once a button was pressed.
- This was later fixed by adding filler content to the h2 tag.

Another bug was due to a manifest link generated by favicon creating errors within the console

<details>
    <summary>manifest bug</summary>
    <img src="assets/images/readme/console-log-bug.png">
</details>

This was fixed by removing the manifest links.

## Deployment

My website is deployed using [Github](https://github.com/) Pages, this is done through the following steps:

- Head to your repository.
- Select the settings tab.
- Select the pages tab within settings.
- Set the branch to 'main'.
- Live link is given after a few minutes.

<details>
    <summary>Settings tab</summary>
    <img src="assets/images/readme/deployment/settings-tab.png">
</details>

<details>
    <summary>Pages tab</summary>
    <img src="assets/images/readme/deployment/pages-tab.png">
</details>

<details>
    <summary>Setting the branch to 'Main'</summary>
    <img src="assets/images/readme/deployment/selecting-branch.png">
</details>

<details>
    <summary>Live site link</summary>
    <img src="assets/images/readme/deployment/live.png">
</details>

### EmailJS API

My project includes an automatic email when the form is submitted, this is done using [Emailjs](https://www.emailjs.com/).<br>
Here you can make an account for free and create a template for the email when it is send from the user. <br>
They have a guide to do this on their [website](https://www.emailjs.com/docs/tutorial/overview/).

## Credits

### Media

All images were taken from the official [wikipedia](https://oldschool.runescape.wiki/) for OSRS

### Code

All the code used in the website was written by the me (the publisher) excluding the following:

- The questions used for the quiz were generated by ChatGPT and I edited them to be suitable and correct.
- The favicon link which was generated by [Favicon.co](https://favicon.io/).
- This code snippet was inspired by [Stackoverflow](https://stackoverflow.com/questions/58791656/send-email-directly-from-javascript-using-emailjs) and the guide mentioned in the [EmailJS API](#emailjs-api).
- The DOMContentLoaded event listener in the Quiz.js file, this was taken and edited from the Love Maths walkthrough project as a part of Code Institute.
- A template for the readme file came from a Code Institute student [Ana Runje](https://github.com/4n4ru/CI-P2-GuessingBee/tree/master).
- A template for the questionList.js came from Code Institute student [Mike Ralph](https://github.com/MikeR94/CI-Project-Portfolio-2)

<details>
    <summary>emailjs code snippet</summary>
    <img src="assets/images/readme/emailjs-code.png">
</details>

## Acknowledgments

Huge thanks to Code Institute for this opportunity, this project was made for my portfolio project 2 within Code Institute's course. Massive thanks to my mentor [Mo Shami](https://www.linkedin.com/in/moshami/) and my friend [Mike Ralph](https://www.linkedin.com/in/mike-ralph-891757112/) as well as the slack community and the Code Institute learning tutors for the help along the way.