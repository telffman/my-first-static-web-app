document.getElementById('yesButton').addEventListener('click', function() {
    sendVote('yes');
});

document.getElementById('noButton').addEventListener('click', function() {
    sendVote('no');
});

function sendVote(vote) {
    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vote: vote })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
