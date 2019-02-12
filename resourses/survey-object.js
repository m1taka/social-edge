/* eslint-disable no-unused-vars */
var pages= [
  {
    name: "page1",
    elements: [
      {
        type: "radiogroup",
        name: "question1",
        title: "What kind of electric supply you are using currently?",
        choices: [
          {
            value: "item1",
            text: "The Local Electric company"
          },
          {
            value: "item2",
            text: "Own Solar Panel System/ Other Bio energy source"
          }
        ]
      }
    ]
  },
  {
    name: "page2",
    elements: [
      {
        type: "radiogroup",
        name: "question2",
        title:
          "Do you really need to make a change on your monthly electric expenses?",
        choices: [
          {
            value: "item1",
            text: "Yes"
          },
          {
            value: "item2",
            text: "No"
          }
        ]
      }
    ]
  },
  {
    name: "page3",
    elements: [
      {
        type: "radiogroup",
        name: "question3",
        title:
          "Are you ready to dedicate one hour of your time to educate yourself and learn how you can save up to 60% of your expenses?",
        choices: [
          {
            value: "item1",
            text: "Yes"
          },
          {
            value: "item2",
            text: "No"
          }
        ]
      }
    ]
  },
  {
    name: "page4",
    elements: [
      {
        type: "text",
        name: "question4",
        title: "Fill your Email address, get the future in your hands:",
        isRequired: true,
        validators: [
          {
            type: "email"
          }
        ],
        inputType: "email",
        placeHolder: "Your e-mail here..."
      }
    ]
  }
]