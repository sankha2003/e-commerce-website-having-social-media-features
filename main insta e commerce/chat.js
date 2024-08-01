document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelectorAll('.contact');
    const chatTitle = document.getElementById('chat-title');
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
  
    let currentChat = '';
  
    contacts.forEach(contact => {
      contact.addEventListener('click', () => {
        const contactName = contact.dataset.contact;
        currentChat = contactName;
        chatTitle.textContent = contactName;
        chatMessages.innerHTML = ''; // Clear previous messages
        messageInput.disabled = false;
        sendBtn.disabled = false;
  
        // Load previous messages for the selected contact
        loadMessages(contactName);
      });
    });
  
    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const messageText = messageInput.value.trim();
      if (messageText === '') return;
  
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'sent');
      messageElement.textContent = messageText;
      chatMessages.appendChild(messageElement);
  
      messageInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
  
      // Save the message to localStorage
      saveMessage(currentChat, messageText);
    }
  
    function saveMessage(contactName, messageText) {
      const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
      if (!chatHistory[contactName]) {
        chatHistory[contactName] = [];
      }
      chatHistory[contactName].push({ type: 'sent', text: messageText });
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
  
    function loadMessages(contactName) {
      const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || {};
      const messages = chatHistory[contactName] || [];
      messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.type);
        messageElement.textContent = message.text;
        chatMessages.appendChild(messageElement);
      });
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });