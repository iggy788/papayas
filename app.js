$('document').ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: 'AIzaSyD_B-hi7NYG4AgL9-aroiXdBB-Cmc1W2vc',
        authDomain: 'papayas-1377f.firebaseapp.com',
        databaseURL: 'https://papayas-1377f.firebaseio.com',
        projectId: 'papayas-1377f',
        storageBucket: '',
        messagingSenderId: '428305439193',
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

    // Capture Button Click
    $('#submit-button').on('click', function() {
        // Don't refresh the page!
        event.preventDefault();

        // YOUR TASK!!!

        // Code in the logic for storing and retrieving the most recent user.
        database.ref().set({
            name: $('#name').val(),
            role: $('#role').val(),
            start: $('#start').val(),
            rate: $('#rate').val(),
        });
        // Don't forget to provide initial data to your Firebase database.
        $('#name-display').html($('#name').val());
        $('#role-display').html($('#role').val());
        $('#start-display').html($('#start').val());
        $('#rate-display').html($('#rate').val());
    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on(
        'value',
        function(snapshot) {
            var info = snapshot.val();
            if (info != null) {
                $('#name-display').html(info.name);
                $('#role-display').html(info.role);
                $('#start-display').html(info.start);
                $('#rate-display').html(info.rate);
            }
        },

        // Create Error Handling
        function(errorObject) {
            console.log('The read failed: ' + errorObject.code);
        }
    );
});