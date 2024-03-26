document.getElementById('studyForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value.trim();
    var percentage = document.getElementById('percentage').value.trim();
    var namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    var percentagePattern = /^\d+(\.\d{1,2})?\s*%?$/;

    if (!namePattern.test(name)) {
        alert('Please enter a valid name. Only alphabets and single spaces are allowed.');
        event.preventDefault();
        return; // Stop further execution
    }

    if (!percentagePattern.test(percentage)) {
        alert('Please enter a valid percentage in the format XX.XX or XX.XX%.');
        event.preventDefault();
        return; // Stop further execution
    }

    // If all validations pass, redirect to chatBot.html
    window.location.href = 'chatBot.html';
    // Prevent the default form submission behavior
    event.preventDefault();
});
