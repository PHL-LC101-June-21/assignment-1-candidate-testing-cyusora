const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ['Who was the first American woman in space?', 'True or false: 5 kilometer == 5000 meters?', '(5 + 3)/2 * 10 = ?', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 'What is the minimum crew size for the ISS?'];   
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  const input = require('readline-sync');
  candidateName = input.question('Enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    let userInput = input.question(questions[i]);
    candidateAnswers.push(String(userInput));
    if (candidateAnswers[i].toLowerCase() !== correctAnswers[i].toLowerCase()) {
      console.log(
        `Sorry. ${candidateAnswers[i]} is incorrect. The correct answer is ${correctAnswers[i]}`
      );
    } else {
      console.log("Correct!");
      
    }
  }
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let correct = 0;
for (let i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correct += 1;
  }
}

  let grade = correct / 5 * 100;
  if (grade >= 80) {
    console.log(`Congratulations! You passed! Your grade is ${grade}%`);
  } else if (grade < 80) {
    console.log(`Your grade is ${grade}%. Sorry, you did not pass the quiz. Try again.`)
  }

  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Hello, ' + candidateName + '! Let us take this quiz!');
  askQuestion();
  console.log();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};