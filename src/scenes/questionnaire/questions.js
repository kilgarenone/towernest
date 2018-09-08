export default (questions = [
  {
    description: "How old are you?",
    answers: [
      {
        value: "under 20",
        weight: 5
      },
      {
        value: "20-39",
        weight: 4
      },
      {
        value: "40-59",
        weight: 3
      },
      {
        value: "60-79",
        weight: 2
      },
      {
        value: "80 and older",
        weight: 1
      }
    ]
  },
  {
    description: "I plan to begin taking money from my investments in",
    answers: [
      {
        value: "Less than 3 years",
        weight: 1
      },
      {
        value: "3-5 years",
        weight: 2
      },
      {
        value: "6-10 years",
        weight: 3
      },
      {
        value: "More than 11 years",
        weight: 4
      }
    ]
  }
]);
