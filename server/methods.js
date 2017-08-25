Meteor.methods({

    saveTask : function(obj){
        Tasks.insert({name: obj.name, date: new Date()});
    },

    deleteTask : function(id){
        Tasks.remove({_id: id});
    }

});