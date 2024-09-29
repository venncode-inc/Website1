document.addEventListener('DOMContentLoaded', (event) => {
    loadMessages();
});

function sendMessage() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const usernameInput = document.getElementById('username-input');
    const message = chatInput.value;
    const username = usernameInput.value || 'Anonymous';

    if (message.trim() !== "") {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        messageElement.classList.add('message', 'sent');
        chatBox.appendChild(messageElement);
        saveMessage(username, message);
        chatInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function saveMessage(username, message) {
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ username, message });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

function loadMessages() {
    const chatBox = document.getElementById('chat-box');
    let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(({ username, message }) => {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        messageElement.classList.add('message', 'sent');
        chatBox.appendChild(messageElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}
