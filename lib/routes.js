Accounts.onLogin( function() {
	FlowRouter.go('test');
});

Accounts.onLogout( function() {
	FlowRouter.go('home');
});



FlowRouter.route('/',{
	name:'home',
	action(){
		

		//if(Meteor.userId()){
		//	FlowRouter.go('mainLayout');
		//}
		BlazeLayout.render('welcomeNote');
	}
});

FlowRouter.route('/test',{
	name : 'test',
	action(){
		
		BlazeLayout.render('test');
	}
});


