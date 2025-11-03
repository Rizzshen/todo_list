import GetTodosTasks from './components/GetTodos'
import { getTodos, DeleteTask, UpdateTask, ToggleTaskCompletion } from './services/Todoservice'
import { CreateButton } from './components/CreateButton'
import { useState, useEffect } from 'react';
import './App.css'
import { Layout } from './components/Layout';

function App() {
  const[data, setdata] = useState([]);

    useEffect(
        ()=> {
            getTodos().then(setdata).catch(console.error)
        },[]);

  function handleAddTask(newdata){
    setdata((prev)=> [newdata, ...prev])
  }

  function handleDeleteTask(id){ 
    console.log(id)
    DeleteTask(id).then(()=> setdata(prev => prev.filter(task => task._id !== id))).catch(console.error)    
  }

  function handleEditTask(id, title, description, dueDate, completed, priority){
    UpdateTask(id, title, description, dueDate, completed,priority).then((updatedTask)=> setdata(prev=> prev.map(task => task._id === id? updatedTask : task) )).catch(console.error)
  }
  function handleCheckTask(id, completed){
    ToggleTaskCompletion(id, completed).then((updatedTask)=> setdata(prev=> prev.map(task => task._id === id? updatedTask : task) )).catch(console.error)
  }
  return (
    <>
      
      <Layout>
        <GetTodosTasks data={data} onDelete={handleDeleteTask} onEdit={handleEditTask} onCheck={handleCheckTask}>
        <CreateButton onTaskAdd={handleAddTask}/>
        </GetTodosTasks>
      </Layout>
      
      
    </>
  )
}

export default App
