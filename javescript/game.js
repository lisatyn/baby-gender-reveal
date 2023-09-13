var form = document.getElementById('form');
form.addEventListener('submit', showMessage);

function showMessage(event) {
    alert("Twinkle, Twinkle, Little Star ... Oh Baby Boy! Our little man has arrived!");
    event.preventDefault();
}