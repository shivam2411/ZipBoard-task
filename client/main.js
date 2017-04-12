import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Resolutions = new Mongo.Collection('resolutions');
Discussions = new Mongo.Collection('discussions');
Template.test.helpers({
	discussions:function(){
 return Discussions.find();
}
});

Template.test.events({
	'submit .new-resolution':function(event){
		var title = event.target.title.value;
		Discussions.insert({
			title:title,
			createdAt: new Date(),
			createdBy: Meteor.user().emails[0].address 

		});
		event.target.title.value = "";
		return false;
	}
});

Template.timeSince.helpers({
  time(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
      return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
      return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
      return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
      return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
      return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
  }
});


