export function Edit({ onEdit, id, onClose, initialCompleted = false, taskname = "", description = "", duedate = "", priority = "Low" }) {
  const editSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    await onEdit(
      id,
      form.title.value,
      form.description.value,
      form.dueDate.value || null,
      form.completed.checked, 
      form.priority.value
    );
    onClose();
  };
  return (
    <form onSubmit={editSubmit} className="flex flex-col p-2 border rounded-lg bg-gray-800 text-white">
      {console.log("editing", id)}
      
      <input name="title" defaultValue={taskname} className="rounded-md bg-gray-700 p-2 "></input>
      <div className="flex flex-row justify-between items-center mt-2 gap-2">
        <label className="inline-flex items-center gap-2 rounded-md border border-gray-500 p-2">
        <input
          name="completed"
          type="checkbox"
          defaultChecked={initialCompleted}
          className=" appearance-none rounded-full w-4 h-4 bg-gray-600 checked:bg-blue-600 border-2 border-gray-400 checked:border-blue-600 cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        Completed
      </label>
      <select name="priority" defaultValue={priority} className="rounded-md border border-gray-500 p-2">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      </div>
      <textarea name="description" defaultValue={description} className="mt-3 border  border-gray-600 bg-gray-700 rounded-md p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      
        <input name="dueDate" type="date" defaultValue={duedate} className="rounded-md mt-2 bg-gray-700 p-2" placeholder="Deadline"></input>
        
      
      
      
      <div className="flex flex-row gap-2 mt-2 justify-end">
        <div></div>
        <button type="submit" className="rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-700 transition">Save</button>
        <button type="button" className="rounded-md px-4 py-2 bg-gray-700 hover:bg-gray-500 transition" onClick={() => onClose()}>
        Cancel
      </button>
      </div>
      
    </form>
  );
}
