import React, { useState ,useEffect} from 'react'
import  urid  from 'urid'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodo from './EditTodo'
function TodoContainer() {
  const [tasks, setTasks] = useState([])
  
  // this function takes the task value from the TodoForm 
  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: urid(5,"num"),
        body: task,
        completed: false,
        isEditing: false,
      },
    ]);
    
    
    
  }
  //change the completed value :
  const ChangeCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id===id ?{...task,completed:!task.completed}:task))
    
  }
  //delete the task:
  const deleteHandler = (id) => {
    setTasks(tasks.filter(task => {
      return task.id!==id
    }))
  }
  //edit the task:
  const editHandler = (id) => {
    setTasks(tasks.map(task=>task.id===id ?{...task,isEditing:!task.isEditing}:task))
  }
  const editTask = (task1, id) => {
    setTasks(tasks.map(task=>task.id===id?{...task,body:task1,isEditing:!task.isEditing}:task))
    
  }
  //add the tasks to local storage:
  useEffect(() => {
    // console.log('hi')
    localStorage.setItem("Tasks",JSON.stringify(tasks))
  }, [tasks])
  
  return (
    <div className="container bg-white rounded-lg p-4 md:p-5 lg:p-6 text-center max-w-3xl ">
      <h1 className="title text-2xl md:text-3xl lg:text-4xl font-bold m-8 md:my-8 lg:my-8">
        What's the plan today !
      </h1>
      <TodoForm addTask={addTask} />
      <div  className="tasks-container my-10">
        
        {tasks.map((task, index) => {
          return task.isEditing ? (
            <EditTodo key={task.id} ediTodo={editTask} task={task} />
          ) : (
            <Todo
              key={index}
              task={task}
              ChangeCompleted={ChangeCompleted}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoContainer