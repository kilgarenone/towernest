const riskProfileQuestions = [
  {
    description: "How old are you?",
    key: "riskQuestion-1",
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
    description: "What is your monthly income?",
    key: "riskQuestion-2",
    answers: [
      {
        value: "Less than 5,000",
        weight: 1
      },
      {
        value: "5,000 - 10,000",
        weight: 2
      },
      {
        value: "More than 10,000",
        weight: 3
      }
    ]
  },
  {
    description: "I plan to begin taking money from my investments in",
    key: "riskQuestion-3",
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
  },
  {
    description:
      "Imagine that within three months in 2008, your total stocks value fell to $7,000 from $10,000. What you would do?",
    key: "riskQuestion-4",
    answers: [
      {
        value: "Sell all of my shares",
        weight: 1
      },
      {
        value: "Sell some of my shares",
        weight: 2
      },
      {
        value: "Do nothing",
        weight: 3
      },
      {
        value: "Buy more shares",
        weight: 4
      }
    ]
  }
];

export default riskProfileQuestions;
