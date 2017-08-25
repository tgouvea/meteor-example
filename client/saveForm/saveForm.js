Template.saveForm.events({

    'submit #taskForm' : function (e, template){        
        e.preventDefault();

        var input = $("#task");
        var name = input.val();

        Tasks.insert({name: name, date: new Date()});
        input.val("");
    }

});