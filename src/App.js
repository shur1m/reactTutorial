import { useState } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';

function App() {
  //allows to use state instead
  //would use useState in order to change the current state
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th, at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th, at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th, at 2:30pm',
        reminder: false,
    }
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className = "container">
      <Header/>
      
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
