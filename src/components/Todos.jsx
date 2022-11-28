import { useState } from 'react';

const initTodos = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' },
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
];
const initTodosUpdated = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' },
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
  { id: 4, value: 'kas ivesta i input', done: false, date: '' },
];

function Todos(props) {
  const [newTodoValue, setNewTodoValue] = useState('');

  // main todo array for the app
  const [todosArr, setTodosArr] = useState(initTodos);

  function addNewTodoHandler() {
    // pagaminti nauja todo obj
    const newTodoObj = {
      id: Math.random().toString().slice(2),
      value: newTodoValue,
      done: false,
      date: new Date(),
    };
    // nekeisdamas orginalo atnaujinti todosArr su todosArr versija turinciam nauja todo
    // negalim keisti newTodoValue reiksmes tiesiogiai su push ar dar kazkuo
    // const newTodoArrCopyWithNewTodo = [...todosArr, newTodoObj];
    const newTodoArrCopy = todosArr.slice();
    newTodoArrCopy.push(newTodoObj);

    setTodosArr(newTodoArrCopy);
  }

  function deleteTodoHandler(idToDelete) {
    //
    console.log('delete', idToDelete);
    setTodosArr((prevTodoArr) => {
      const todosAfterDelete = prevTodoArr.filter(
        (tObj) => tObj.id != idToDelete
      );
      return todosAfterDelete;
    });
  }

  return (
    <div>
      <fieldset>
        <legend>Add todo</legend>
        <input
          onChange={(e) => setNewTodoValue(e.target.value)}
          value={newTodoValue}
          type='text'
          placeholder='What to do?'
        />
        <button onClick={addNewTodoHandler}>Add</button>
        <h3>{newTodoValue}</h3>
      </fieldset>

      <div className='card'>
        <h3>Todos</h3>
        <ol>
          {todosArr.map((tObj) => (
            <li key={tObj.id}>
              {tObj.value}{' '}
              <button onClick={() => deleteTodoHandler(tObj.id)}>X</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default Todos;