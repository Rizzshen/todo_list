import { CreateTask } from "../services/Todoservice"
export function TemporaryCard({onTaskAdd, onClose}){
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let form = e.target 
        console.log("Yo this is the date", new Date(form.dueDate.value))
        let body = JSON.stringify({task: form.taskname.value, description: form.description.value, priority: form.priority.value, dueDate: form.dueDate.value? new Date(form.dueDate.value): null })
        try{
            const response = await CreateTask(body)
            if(response && onTaskAdd) onTaskAdd(response)
            form.reset()
        }
        catch(err){
            console.log("errror",err)
        }
    }
    return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-md w-full p-2 max-w-sm flex flex-col gap-2 hover:shadow-lg transition-shadow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Task Title */}
        <input
          name="taskname"
          placeholder="Enter task title..."
          className="p-2 rounded-md border border-gray-700 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Add a description..."
          rows={3}
          className="p-2 rounded-md border border-gray-700 bg-gray-800 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Due Date & Priority */}
        <div className="flex gap-2 items-center">
        <input
          name="dueDate"
          type="date"
          className="p-1 rounded-md border w-1 border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
        />
        <select
          name="priority"
          className="p-1 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-1 rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

}