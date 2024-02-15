document.addEventListener('DOMContentLoaded', function() {
    const heartLabel = document.getElementById('heartLabel');
    const messageState = document.getElementById('messageState');
    const message = document.getElementById('message');

    // Function to handle click event
    function handleClick() {
        // Remove the heart element
        heartLabel.style.display = 'none';
        // Show the message
        message.classList.remove('hidden');
    }

    // Add click event listener to the heart label
    heartLabel.addEventListener('click', handleClick);

    // Add click event listener to the message to toggle its visibility
    message.addEventListener('click', function() {
        messageState.checked = !messageState.checked;
        message.classList.toggle('hidden');
    });
});
