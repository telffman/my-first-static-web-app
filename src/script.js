document.addEventListener("DOMContentLoaded", function() {
    const pageViews = localStorage.getItem('pageViews') ? parseInt(localStorage.getItem('pageViews')) : 0;
    localStorage.setItem('pageViews', pageViews + 1);
    document.getElementById('pageViews').textContent = pageViews + 1;

    const yesVotes = localStorage.getItem('yesVotes') ? parseInt(localStorage.getItem('yesVotes')) : 0;
    const noVotes = localStorage.getItem('noVotes') ? parseInt(localStorage.getItem('noVotes')) : 0;
    document.getElementById('yesVotes').textContent = yesVotes;
    document.getElementById('noVotes').textContent = noVotes;

    document.getElementById('yesButton').addEventListener('click', function() {
        localStorage.setItem('yesVotes', yesVotes + 1);
        document.getElementById('yesVotes').textContent = yesVotes + 1;
    });

    document.getElementById('noButton').addEventListener('click', function() {
        localStorage.setItem('noVotes', noVotes + 1);
        document.getElementById('noVotes').textContent = noVotes + 1;
    });
});
