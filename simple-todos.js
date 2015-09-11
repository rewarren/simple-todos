if (Meteor.isClient) {
  Template.body.helpers({
    tasks: [
      {text: "Rethink brand statement"},
      {text: "Work on resume"},
      {text: "Prepare for project 4"},
      {text: "Buy bday card"}
    ]
  });
}
