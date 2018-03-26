import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import LoadButton from '../containers/LoadButton'
import CardContainer from '../containers/CardContainer'

const App = () => (
  <div>
    <CardContainer />
    <LoadButton />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
