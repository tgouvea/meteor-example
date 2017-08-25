Meteor.methods({

    saveTask : function(obj){
        Tasks.insert({name: obj.name, date: new Date(), user: this.userId});
    },

    deleteTask : function(id){
        Tasks.remove({_id: id, user: this.userId});
    }

});