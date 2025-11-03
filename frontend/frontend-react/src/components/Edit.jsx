export function Edit({ onEdit, id, onClose, initialCompleted = false }) {
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
    <form onSubmit={editSubmit}>
      {console.log("editing", id)}
      <input name="title"></input>
      <input name="description"></input>
      <input name="dueDate" type="date" ></input>
      <label className="inline-flex items-center gap-2">
        <input
          name="completed"
          type="checkbox"
          defaultChecked={initialCompleted}
        />
        Completed
      </label>
      <select name="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="rounded m-4 p-2 px-4 border-2">save</button>
      <button type="button" className="rounded m-4 p-2 px-4 border-2" onClick={() => onClose()}>
        cancel
      </button>
    </form>
  );
}
