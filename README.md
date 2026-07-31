<div align="center">

# QuizApp

**A compact browser-based programming quiz built with vanilla JavaScript and Bootstrap.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap%205-7952B3?style=flat&logo=bootstrap&logoColor=white)

[📂 Repository](https://github.com/EbubekirElicora/QuizApp)

</div>

---

## Overview

QuizApp is a frontend learning project that presents a sequence of multiple-choice questions about the history of web technologies and programming languages.

The application is built without a frontend framework. It uses **HTML, CSS, vanilla JavaScript and Bootstrap 5** to render questions dynamically, process answer selections, display visual and audio feedback, update quiz progress and show the final score.

The project focuses on fundamental JavaScript concepts such as arrays, objects, functions, DOM manipulation, conditional logic, event handling and application-state management.

---

## Features

- Multiple-choice quiz with four answers per question
- Question data stored as structured JavaScript objects
- Dynamic rendering of questions and answers
- Current-question counter
- Total-question counter
- Percentage-based progress bar
- Green visual feedback for correct answers
- Red visual feedback for incorrect answers
- Highlighting of the correct answer after a wrong selection
- Audio feedback for correct and incorrect answers
- Disabled next-question button until an answer is selected
- Final score screen
- Display of correct answers compared with the total number of questions
- Restart function for repeating the quiz
- Bootstrap-based card and button components
- Centered layout with custom styling

---

## Quiz Topics

The included questions cover the creators of several important technologies and programming languages:

- HTML
- CSS
- Java
- JavaScript
- Python
- C++

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3

### Browser APIs

- DOM API
- HTML Audio API
- Inline event handling

### Development tools

- Git
- GitHub
- Visual Studio Code
- Browser Developer Tools

---

## Application Flow

```text
Load application
    ↓
Initialize question counter
    ↓
Render current question and answers
    ↓
User selects an answer
    ↓
Show correct or incorrect feedback
    ↓
Enable the next-question button
    ↓
Update progress and load next question
    ↓
Display final score
    ↓
Restart quiz when requested
```

---

## Question Data Model

The quiz content is stored in an array of JavaScript objects. Each object contains one question, four possible answers and the number of the correct answer.

```javascript
{
  question: "Wer hat HTML erfunden?",
  answer_1: "Robbie Williams",
  answer_2: "Lady Gaga",
  answer_3: "Tim Berners-Lee",
  answer_4: "Justin Bieber",
  right_answer: 3
}
```

This structure makes it possible to add, remove or modify quiz questions without changing the HTML layout.

---

## Core Application State

The application uses the following values to track the current quiz session:

```javascript
let rightQuestions = 0;
let currentQuestion = 0;
```

- `rightQuestions` stores the number of correctly answered questions.
- `currentQuestion` identifies the question currently displayed.

The complete quiz content is stored in the `questions` array.

---

## Main JavaScript Functions

### `init()`

Initializes the quiz, updates the total number of questions and displays the first question.

### `showQuestion()`

Determines whether the quiz is complete. It either renders the next question or opens the final score screen.

### `gameIsOver()`

Checks whether the current question index has reached the end of the questions array.

### `updateToNextQuestion()`

Retrieves the current question object and updates the question text, answer fields and question counter in the DOM.

### `answer(selection)`

Processes a selected answer, applies visual feedback, plays the appropriate sound and enables navigation to the next question.

### `updateProgressbar()`

Calculates the current completion percentage and updates both the width and text of the Bootstrap progress bar.

### `nextQuestion()`

Advances the quiz, disables the navigation button again, clears the previous answer styles and renders the next question.

### `showEndScreen()`

Hides the question interface and displays the final result with the number of correct answers.

### `restartGame()`

Resets the score and question index, restores the original interface and starts a new quiz session.

---

## Visual and Audio Feedback

When the user selects an answer:

- A correct answer receives Bootstrap's `bg-success` class.
- An incorrect answer receives Bootstrap's `bg-danger` class.
- The correct answer is additionally highlighted after a wrong selection.
- A success or failure sound is played through the HTML Audio API.

Audio files are loaded from:

```text
audio/richtig.mp3
audio/falsch.mp3
```

---

## Project Structure

```text
QuizApp/
├── audio/
│   ├── richtig.mp3          # Correct-answer sound
│   └── falsch.mp3           # Incorrect-answer sound
├── img/
│   ├── bg b.png             # Quiz header image
│   └── Group 5.png          # Final-screen image
├── index.html               # Application structure
├── script.js                # Questions, state and quiz logic
├── style.css                # Custom layout and component styling
└── README.md                # Project documentation
```

---

## Getting Started

### Requirements

No package installation or build process is required.

You only need:

- A modern web browser
- A local development server such as the Visual Studio Code Live Server extension

### Clone the repository

```bash
git clone https://github.com/EbubekirElicora/QuizApp.git
cd QuizApp
```

### Run locally

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Select **Open with Live Server**.
4. The quiz opens in your default browser.

The project can also be opened directly through `index.html`, although a local development server is recommended.

---

## Usage

1. Read the displayed question.
2. Select one of the four possible answers.
3. Review the visual and audio feedback.
4. Select **Nächste Frage** to continue.
5. Complete all questions to view the final score.
6. Select **Erneut spielen** to restart the quiz.

---

## Styling

The user interface combines Bootstrap components with custom CSS.

Custom styles are used for:

- Page background
- Vertically and horizontally centered quiz card
- Answer hover states
- Question-footer layout
- Correct and incorrect answer text colors
- Final-score headline
- Restart-button alignment

Bootstrap provides:

- Navigation bar
- Cards
- Buttons
- Progress bar
- Spacing utilities
- Success and danger states

---

## Learning Goals

This project was developed to practise and demonstrate:

- Working with arrays and objects
- Rendering data dynamically in the browser
- Updating HTML elements through JavaScript
- Managing application state
- Implementing conditional program flow
- Handling user interactions
- Providing visual feedback
- Using the HTML Audio API
- Calculating and displaying progress
- Creating restartable application logic
- Combining Bootstrap with custom CSS

---

## Current Technical Note

The current `rightAnswerSelected()` helper references a `question` variable that is declared locally inside `answer()`. Because that variable is not available inside the helper function, answer validation should be adjusted before the application is considered production-ready.

One possible correction is to pass the current question into the helper:

```javascript
function rightAnswerSelected(selectedQuestionNumber, question) {
  return selectedQuestionNumber == question.right_answer;
}
```

and update the call accordingly:

```javascript
if (rightAnswerSelected(selectedQuestionNumber, question)) {
  // Correct-answer handling
}
```

This note documents the current repository state without changing the original learning-project code.

---

## Possible Future Improvements

- Correct the answer-validation scope issue
- Prevent multiple selections for the same question
- Replace inline `onclick` handlers with `addEventListener()`
- Move question content into a separate JSON file
- Add quiz categories
- Randomize questions and answer order
- Add a countdown timer
- Add difficulty levels
- Add a start screen
- Add detailed explanations after each answer
- Save high scores in `localStorage`
- Add keyboard navigation
- Improve accessibility with ARIA attributes
- Add responsive refinements for very small screens
- Add automated tests
- Add a deployed live demo

---

## Disclaimer

This project was created for educational and portfolio purposes. The included questions and names are used only as quiz content to demonstrate frontend functionality.

---

## Author

**Ebubekir Elicora**

[GitHub](https://github.com/EbubekirElicora) · [Portfolio](https://ebubekir-elicora.de/) · [LinkedIn](https://www.linkedin.com/in/ebubekir-eli%C3%A7ora-a27b47392/)
