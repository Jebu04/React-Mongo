import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Phonebook from "./Components/Phonebook"
import FeedBack from './Components/Feedback'
import Reminder from './Components/Reminder'

axios
  .get('http://localhost:3001/reminders')
  .then(response => {
    const notes = response.data
    console.log(notes)
  })


function App() {

  const phonebook = {
    name: 'Superadvanced phonebook app',
    contacts: [
      {
        name: 'John Doe',
        phonenumber: '358401234567',
        id: 1
      },
      {
        name: 'Jane Doe',
        phonenumber: '44551234567',
        id: 2
      },
      {
        name: 'Foo bar',
        phonenumber: '000',
        id: 3
      }
    ]
  }


  return (
    <div>
      <Phonebook phonebook={phonebook} />
      <FeedBack />
      <Reminder />


    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)