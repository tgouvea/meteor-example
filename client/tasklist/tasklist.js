Template.tasklist.helpers({

    task : function(){

        return Tasks.find({});

    },


    dateFormat : function() {
    
        return moment(this.date).format('DD/MM/YYYY HH:mm')

    }


});


Template.tasklist.events({

    "click #buttonDelete" : function(e, template){

        var task = this;
        
        Meteor.call("deleteTask", task._id);

    }


});