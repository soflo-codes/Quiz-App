export default function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentIndex = 0;
}
Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentIndex];
};
Quiz.prototype.nextIndex = function () {
  this.currentIndex++;
};
Quiz.prototype.hasEnded = function () {
  return this.currentIndex === this.questions.length;
};
Quiz.prototype.guess = function (userGuess) {
  const currrentQuestion = this.questions[this.currentIndex];

  if (currrentQuestion.isCorrect(userGuess)) {
    this.score++;
  }

  this.nextIndex();
};

Quiz.prototype.reset = function () {
  this.score = 0;
  this.currentIndex = 0;
};
