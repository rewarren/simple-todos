Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({});
    }
  });

  Template.body.events({
    "submit .new-task": function (event){
      event.preventDefault();
      var text = event.target.text.value; //get value from form
      Tasks.insert({
        text: text,
        createdAt: new Date() //current time
      });
      event.target.text.value = ""; //clear form
    }
  });
}
