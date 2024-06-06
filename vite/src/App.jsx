import React from 'react'
import './App.css'
import LoginForm from './Login'
import Apps from './Index'
import Todo from './TodoList'

import { BrowserRouter,Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path = "/Login" element = {<LoginForm/>}/>
          <Route path= '' element = {<Apps/>}/>
          <Route path= '/Todolist' element = {<Todo/>}/>
          
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
