import { useState } from 'react';

const initTodos = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' }, // 2 el.done = true
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
];
const initTodosUpdated = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' },
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
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
      date: new Date().toLocaleTimeString(),
    };
    // nekeisdamas orginalo atnaujinti todosArr su todosArr versija turinciam nauja todo
    // negalim keisti newTodoValue reiksmes tiesiogiai su push ar dar kazkuo
    // const newTodoArrCopyWithNewTodo = [...todosArr, newTodoObj];
    const newTodoArrCopy = todosArr.slice();
    newTodoArrCopy.push(newTodoObj);

    setTodosArr(newTodoArrCopy);
    // clear out input
    setNewTodoValue('');
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

  // infered value
  const noTodosYet = !todosArr.length;

  function handleKey(e) {
    // console.log('e.code ===', e.code);
    // console.log('e.keyCode ===', e.keyCode);
    // jei keyCode === 13 tai paspaustas enter klavisas
    // iskviesti addNewTodoHandler
    if (e.keyCode === 13) addNewTodoHandler();
  }

  function doneTodoHandler(idToBeDoneWith) {
    console.log('make done el with id', idToBeDoneWith);
    // veiksmu seka padaryti done

    setTodosArr((prevTodosArr) => {
      // 3. visa tai padaryti su state copija
      const stateCopy = [...prevTodosArr];
      // 1. surasti ta el pagal id
      const foundTodo = stateCopy.find((tObj) => tObj.id === idToBeDoneWith);
      console.log('foundTodo ===', foundTodo);
      // 2. pakeisti jo done i true
      foundTodo.done = !foundTodo.done;
      // 4. atnaujinti state su pakeistu done elementu
      return stateCopy;
    });
  }

  return (
    <div>
      <fieldset>
        <legend>Add todo</legend>
        <input
          onChange={(e) => setNewTodoValue(e.target.value)}
          onKeyUp={handleKey}
          value={newTodoValue}
          type='text'
          placeholder='What to do?'
        />
        <button onClick={addNewTodoHandler}>Add</button>
        <h3>{newTodoValue}</h3>
      </fieldset>

      <div className='card'>
        {noTodosYet && <h3>No todos yet, add some.</h3>}
        {!noTodosYet && (
          <>
            <h3>Todos</h3>
            <ol>
              {todosArr.map((tObj) => (
                <li key={tObj.id} className={tObj.done ? 'doneTodo' : ''}>
                  {tObj.value}. created:
                  {tObj.date}
                  <button onClick={() => doneTodoHandler(tObj.id)}>
                    {tObj.done ? 'undo' : 'done'}
                  </button>
                  <button onClick={() => deleteTodoHandler(tObj.id)}>X</button>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
export default Todos;
