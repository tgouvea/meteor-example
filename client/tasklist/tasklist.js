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
        
        Tasks.remove({_id: task._id});

    }


});