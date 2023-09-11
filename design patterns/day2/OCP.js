class ChooseQuestion {
  constructor(description, option) {
    this.description = description;
    this.option = option;
  }

  printQuestion() {
    this.option.forEach((option, index) => {
      console.log(`${index + 1} ${option}`);
    });
  }
}

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestion() {
    console.log("1 : true");
    console.log("2 : false");
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestion() {
    console.log("Answer is : ---------------");
  }
}

var questions = [
  new BooleanQuestion("Singleton pattern is structure pattern"),
  new ChooseQuestion("What is your favorite course?", ["ES6", "JS", "JS DP"]),
  new TextQuestion("Describe builder pattern in details"),
];

function printQuiz(questions) {
  questions.forEach((que) => {
    console.log(que.description);
    que.printQuestion();
  });
}

printQuiz(questions);
