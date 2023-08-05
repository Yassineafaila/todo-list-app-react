import React,{useState} from 'react'

function TodoForm({addTask}) {
  const [task, setTask] = useState("");
  const [error,setError]=useState(false)
  
  const HandlerSubmit = (e) => {
    e.preventDefault()
    if (task.length === 0) {
      setError(true)
    } else {
      setError(false)
      addTask(task);
      setTask("");
    }
    
  }
  
  
  return (
    <div className="todo-form m-4 md:my-6">
      <form className="my-2" onSubmit={HandlerSubmit}>
        <div className="flex items-center justify-between gap-2">
          <input
            className="input-task border border-gray-600 rounded-md p-2 md:p-3 flex-1 focus:border-clr1 focus:border-2 focus:outline-none"
            type="text"
            value={task}
            placeholder="New task..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="todo-btn transition duration-100 ease-linear hover:opacity-70 text-white p-2 md:p-3 uppercase rounded-md cursor-pointer md:w-24 lg:w-24"
          >
            Add
          </button>
        </div>
        {error && (
          <p className="text-start my-2 text-clr1 font-bold italic">
            the task can't be empty
          </p>
        )}
      </form>
    </div>
  );
}

export default TodoForm