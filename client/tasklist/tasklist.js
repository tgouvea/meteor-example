Template.tasklist.helpers({

    task : function(){

        return Tasks.find({});

    },


    dateFormat : function() {
    
        return moment(this.date).format('DD/MM/YYYY HH:mm')

    }


})