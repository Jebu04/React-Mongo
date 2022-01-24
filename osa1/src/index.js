import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Contents from './Contents'
import Feedback2 from './Feedback2'


const App = () => {
  
  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]
  }

  return (
    <div>
      <Header title={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts} />
      <Feedback2 />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)