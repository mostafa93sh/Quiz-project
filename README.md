# Quiz App

A React-based interactive quiz application that tests users' knowledge about React, hooks, JSX, and related web development concepts.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Known Issues & Improvements](#known-issues--improvements)

## ✨ Features

- **Interactive Quiz**: Users answer multiple-choice questions with immediate feedback.
- **Timer-based Questions**: Each question has a 10-second countdown timer.
- **Real-time Feedback**: Visual indication of correct/wrong/selected answers.
- **Quiz Summary**: Displays final score and performance overview after completion.
- **Responsive Design**: Beautiful gradient-based UI that works across different screen sizes.
- **Modern React**: Built with React hooks (useState, useEffect, useCallback) for functional components.

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app component - renders Header and Quiz
├── main.jsx               # Entry point - renders App into the DOM
├── index.css              # Global styles and theme
├── questions.js           # Quiz questions and answers data
├── assets/
│   ├── quiz-logo.png     # Header logo
│   └── quiz-complete.png # Completion screen image
└── components/
    ├── Header.jsx         # Header component with logo and title
    ├── Quiz.jsx           # Main quiz logic - manages state and question flow
   ├── Question.jsx       # potential refactor component
    ├── QuestionTimer.jsx  # Timer component - countdown display
    ├── Answers.jsx        # Answer buttons component
   └── Summery.jsx        # summary display component
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. Clone or navigate to the project directory:

   ```bash
   cd 01-starting-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`).

## 🎮 How to Use

1. **Start the Quiz**: The app displays the first question with a 10-second timer.
2. **Select an Answer**: Click on one of the four answer options.
3. **Immediate Feedback**:
   - Correct answers turn **green**.
   - Wrong answers turn **red**.
   - The selected answer turns **orange**.
4. **Automatic Progression**: After 2 seconds, the next question loads automatically.
5. **Timer Expiry**: If you don't answer within 10 seconds, the timer expires and the question is skipped.
6. **View Summary**: After all 7 questions, see your final score and performance breakdown.

## 🧩 Components

### **App.jsx**

The root component that renders the header and quiz container.

### **Quiz.jsx**

- Manages the quiz state (user answers, current question, answer state).
- Handles answer selection logic and scoring.
- Controls the flow between questions and the summary screen.
- **Props passed to child components**:
  - `QuestionTimer`: timeout (10000ms), onTimeout callback
  - `Answers`: answers array, onAnswerSelect callback, answerState, userAnswer

### **QuestionTimer.jsx**

- Displays a countdown progress bar for each question.
- Calls `onTimeout` when the 10-second timer expires.
- **Props**: `timeout` (ms), `onTimeout` (function)
- **Note**: Currently has a minor timing drift issue (see Improvements below).

### **Answers.jsx**

- Renders a list of answer buttons.
- Shows visual feedback (correct/wrong/selected styles).
- **Props**: `answers` (array), `onAnswerSelect` (callback), `answerState` (string), `userAnswer` (string)

### **Header.jsx**

- Displays the quiz logo and title.

### **Question.jsx** & **Summery.jsx**

- Placeholder components handling per-question display and the final summary.
- Can be refactored for better component separation in future updates.

## 🛠 Technologies Used

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## 📊 Quiz Content

The app includes 7 questions about React fundamentals:

1. React.js definition
2. React hooks purpose
3. JSX explanation
4. Component creation methods
5. React state concept
6. List rendering in React
7. Conditional rendering approaches

**Note**: The correct answer is always the first option in the `answers` array.

## 👤 Author

mostafa93sh

---

**Happy Quizzing!** 🎉
