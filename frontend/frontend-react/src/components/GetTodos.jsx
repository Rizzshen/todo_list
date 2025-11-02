import { Cards } from "./card";


function GetTodosTasks({ data, onDelete, onEdit, children}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center place-items-stretch max-w-7xl mx-auto">
      {console.log(data)}
      {children}
      {data.map((t) => (
        <Cards
          key={t._id}
          taskname={t.task}
          description={t.description}
          duedate={t.dueDate}
          priority={t.priority}
          completed={t.completed}
          id={t._id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      
      
    </div>
  );
}
export default GetTodosTasks;
