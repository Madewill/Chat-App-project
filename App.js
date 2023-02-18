import './App.css';

function App() {
  return (
    <body>
    <div class="container">
      <div class="chatbox">
        <div class="message">
          <span class="username">User 1:</span>
          <span class="text">Hello, how are you?</span>
        </div>
        <div class="message">
          <span class="username">User 2:</span>
          <span class="text">I'm good, thanks for asking!</span>
        </div>
      </div>
      <div class="inputbox">
        <input type="text" placeholder="Enter message..."/>
        <button>Send</button>
      </div>
    </div>
  </body>
  );
}

export default App;
