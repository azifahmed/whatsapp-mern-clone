import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from 'pusher-js'
import React, { useEffect, useState } from 'react';
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data)
    })

  }, [])



  useEffect(()=>{
    const pusher = new Pusher('887bad6b94ee75645b55', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
    return ()=> {
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages]) 
  console.log(messages)


  return (
    <div className="App">
      <div className="app__body">
      <Sidebar />
      <Chat messages ={messages} />
      </div>
    </div>
  );
}

export default App;
