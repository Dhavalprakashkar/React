import React, { useState } from 'react';

function Task() {
  const [todos, updatetodos] = useState([]);
  const [inputvalue, updateinputvalue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (inputvalue.trim()) {
      if (editIndex !== null) {
        // Update the existing todo
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? { text: inputvalue, completed: false } : todo
        );
        updatetodos(updatedTodos);
        setEditIndex(null); // Reset editIndex after editing
      } else {
        // Add a new todo
        updatetodos([...todos, { text: inputvalue, completed: false }]);
      }
      updateinputvalue(''); // Clear input field
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    updatetodos(newTodos);
    // Reset editIndex if the deleted task was being edited
    if (editIndex === index) {
      setEditIndex(null);
      updateinputvalue('');
    }
  };

  const startEdit = (index) => {
    updateinputvalue(todos[index].text); // Set input value to the text of the todo
    setEditIndex(index);
  };

  const toggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    updatetodos(updatedTodos);
  };

  return (
    <div style={{marginLeft:"800px"}}>
      <h1>List Adding Manager</h1>
      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo.text} {todo.completed ? '(Completed)' : ''}</p>
          <button onClick={() => toggleCompleted(index)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => startEdit(index)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
      <input
        type='text'
        value={inputvalue}
        placeholder='Add or edit a task'
        onChange={(event) => updateinputvalue(event.target.value)}
      />
      <button onClick={addTodo}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
    </div>
  );
}

export default Task;
