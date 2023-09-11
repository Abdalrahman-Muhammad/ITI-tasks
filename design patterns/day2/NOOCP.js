var questions = [
  {
    type: "boolean",
    description: "Singleton pattern is structure pattern",
  },
  {
    type: "choose",
    description: "What is your favorite course?",
    options: ["ES6", "JS", "JS DP"],
  },
  {
    type: "text",
    description: "Describe builder pattern in details",
  },
];

function printQuiz(questions) {
  questions.forEach((questions) => {
    console.log(questions.description);
    if (questions.type == "boolean") {
      console.log("1 :true");
      console.log("2 :false");
    } else if (questions.type == "choose") {
      questions.options.forEach((option, index) => {
        console.log(`${index + 1} :${option}`);
      });
    } else if (questions.type == "text") {
      console.log("Answer is :-----------------");
    }
  });
}

printQuiz(questions);
