// Simulate user login
let username = prompt("Please enter your username");

// Get chatbox and input elements
const chatbox = document.querySelector('.chatbox');
const input = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('button');

// Listen for send button click
sendButton.addEventListener('click', () => {
  // Get input value and clear input
  const text = input.value;
  input.value = '';

  // Create new message element
  const message = document.createElement('div');
  message.classList.add('message');

  // Create username and text spans
  const usernameSpan = document.createElement('span');
  usernameSpan.classList.add('username');
  usernameSpan.innerText = `${username}:`;

  const textSpan = document.createElement('span');
  textSpan.classList.add('text');
  textSpan.innerText = text;

  // Append username and text spans to message element
  message.appendChild(usernameSpan);
  message.appendChild(textSpan);

  // Append message element to chatbox
  chatbox.appendChild(message);

  // Scroll chatbox to bottom
  chatbox.scrollTop = chatbox.scrollHeight;
});

