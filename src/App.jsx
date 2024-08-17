import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, update } from "./redux/todo";
import { Card } from "./components/Card";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const input = React.useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const value = input.current.value.trim();

    if (value) {
      dispatch(add({ id: Date.now(), name: value }));
      input.current.value = "";
    }
  };

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    if (newName) {
      dispatch(update({ id, name: newName }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Todo List</h1>
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <input
          ref={input}
          type="text"
          name="name"
          placeholder="Add a new task..."
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Add Task
        </button>
      </form>
      <div className="mt-8 w-full max-w-md">
        {todoList.length ? (
          <div className="space-y-4">
            {todoList.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                id={item.id}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-[30px] text-[#f0f0f0]">No tasks yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;
