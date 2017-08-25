Template.saveForm.events({

    'submit #taskForm' : function (e, template){        
        e.preventDefault();

        var input = $("#task");
        var name = input.val();

        Meteor.call("saveTask", {name: name})
        
        input.val("");
    }

});