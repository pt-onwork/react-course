import { useState, useEffect} from 'react'
import {ChatInput} from './components/ChatInput'
import {Chatbot} from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App(){
  useEffect(()=>{
    Chatbot.addResponses({
      'goodbye':'Goodbye. Have a great day!',
      'give me a unique id': ()=>{
        return `Sure! Here's a unique ID ${crypto.randomUUID()}`;
      }
  })
  },[]);

  const [chatMessages,setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) || []
  // {
  //   message:"hello chatbot",
  //   sender:"user",
  //   id:'id1'
  // },{
  //   message:"Hello! How can I help you?",
  //   sender:"robot",
  //   id:'id2'
  // },{
  //   message:"can you get me todays date",
  //   sender:"user",
  //   id:'id3'
  // },{
  //   message:"Today is June 2",
  //   sender:"robot",
  //   id:'id4'
  // }
  ); 
  //const [chatMessages,setChatMessages]= array; now used idrectly before useState
  //const chatMessages = array[0]; shortcut above , this is called array destructuring 
  //const setChatMessages = array[1];

  useEffect(()=>{
    localStorage.setItem('messages',JSON.stringify(chatMessages))
  },[chatMessages])

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages = {setChatMessages}
      />
      
    </div>
  );
}

export default App
