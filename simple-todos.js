Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    //listening to the submit event on any element that matches the css selector .new-task
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

  Template.task.events({
    "click .toggle-checked": function(){
      //set the checked property opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function(){
      Tasks.remove(this._id);
    }
  });
}
