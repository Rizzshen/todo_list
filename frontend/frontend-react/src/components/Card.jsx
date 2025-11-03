import { Edit } from "./Edit";
import { useState } from "react";

export function Cards({
  taskname,
  description,
  duedate,
  completed,
  priority,
  id,
  onDelete,
  onEdit,
  onCheck,
}) {
  const bgColor = completed
    ? "opacity-70 grayscale-[30%] bg-gray-800 text-gray-300 border-gray-600"
    : "bg-gray-800 text-white border-gray-700";

  const badge =
    priority === "High"
      ? "bg-red-600 text-white ring-red-200"
      : priority === "Medium"
      ? "bg-amber-500 text-gray-900 ring-amber-200"
      : "bg-emerald-600 text-white ring-emerald-200";
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing) {
    return (
      <Edit
        onEdit={onEdit}
        id={id}
        onClose={() => setIsEditing(false)}
        initialCompleted={completed}
      />
    );
  }
  return (
    <div
      className={`shadow-md ${bgColor} hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl border p-4 flex flex-col justify-start items-start w-60 min-h-[14rem] text-lg pb-3 relative`}
    >
      <div className="flex flex-col w-full gap-1">
        <div className="flex items-start w-full group">
          {completed ? (
              <span
                className="flex justify-center items-center w-6 h-6 mt-1 border-2 rounded-full bg-green-400 text-white text-sm font-bold cursor-pointer transition-all duration-300 animate-[pulseGlow_1s_ease-in-out]"
                onClick={() => onCheck(id, false)}
              >
                ✓
              </span>
          ) : (
            <span
              className={`flex justify-center items-center w-5 h-5 mt-1 border-2 p-1 rounded-full border-white  cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              onClick={() => onCheck(id, true)}
            ></span>
          )}

          <h2
            className={`font-bold text-xl mb-2 ml-0 transition-all duration-300 transform group-hover:translate-x-6 ${
              completed ? "line-through" : ""
            } leading-tight`}
          >
            {taskname}
          </h2>
        </div>

        {/* Priority Badge */}
        <span
          className={`inline-flex items-center px-3 py-0.5 text-xs font-semibold rounded-full ${badge} ring-1 shadow-sm uppercase tracking-wide`}
        >
          {priority}
        </span>

        {/* Deadline */}
        <p className="mt-2 text-sm text-gray-300">
          <span className="font-medium">Deadline:</span>{" "}
          {duedate
            ? new Date(duedate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "None"}
        </p>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-200 break-words">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-start gap-2 mt-auto w-full">
        {/* Edit Button */}
        <button
          className="hover:bg-gray-600 text-sm px-3 py-1 rounded-md font-medium transition-colors duration-200"
          title="Edit"
          onClick={() => setIsEditing(!isEditing)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>

        {/* Delete Button */}
        <button
          className="hover:bg-red-500 text-sm px-3 py-1 rounded-md font-medium transition-colors duration-200"
          title="Delete"
          onClick={() => {
            onDelete(id);
            console.log(
              "Cards: delete clicked, id=",
              id,
              "onDelete=",
              !!onDelete
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>

        {/* Completed / Pending Status */}
        <p
          className={`px-2 py-1 text-xs rounded-full font-semibold ml-2 ${
            completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </p>
      </div>
    </div>
  );
}
