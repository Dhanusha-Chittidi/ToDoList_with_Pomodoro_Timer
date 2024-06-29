import { useState
    
 } from "react";
export const TodoList=()=>{
    const [todoList, setTodoList] = useState([]);
  const [currentInput, setCurrentInput] = useState({ task: '', description: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentInput({ ...currentInput, [name]: value });
  }
  const handleAdding = () => {
    const newTask = { ...currentInput, id: Date.now() };
    setTodoList([...todoList, newTask]);

    setCurrentInput({ task: '', description: '' });
  }
  const handleDeleting = (id) => {
    setTodoList(todoList.filter((input) => input.id !== id));
  }
    return (
        <div>
            <h1>To Do List</h1>
      <div class="container">
        <div class="inputs">

          <input class="fields" id='task' type='text' name='task' value={currentInput.task} placeholder='Task' onChange={handleInputChange} />
          <input class="fields" id='desc' type='text' name="description" value={currentInput.description} placeholder='A small Description' onChange={handleInputChange} />
          <button id="add" type="button" class="btn btn-info fields" onClick={handleAdding}>Add</button>

        </div>

        <div>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }} class="list">
            {todoList.map((input, index) => (
              <div class="list-group">
                <li key={index} className='displayingTask'>
                  <div class="task-container">
                    <span>{input.task}</span>
                    <button type="button" class="btn btn-danger del" onClick={() => handleDeleting(input.id)}>X</button>
                  </div>
                  <div>
                    {input.description}
                  </div>
                </li>
              </div>
            ))}
          </ul>

        </div>
      </div>
        </div>
    );
}