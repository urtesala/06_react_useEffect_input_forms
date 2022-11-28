import { useState } from 'react';

function Login(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function emailInputHandler(e) {
    setEmailValue(e.target.value);
  }

  function passwordInputHandler(e) {
    setPasswordValue(e.target.value);
  }
  // susikurti state email ir passwordui.
  // susieti su two way binding inputus su state
  // atvaizduoti htmle/jsx ivestas reiksmes
  return (
    <div>
      <form className='card'>
        <input
          onChange={emailInputHandler}
          value={emailValue}
          type='text'
          placeholder='Email'
        />
        <input
          onChange={passwordInputHandler}
          value={passwordValue}
          type='password'
          placeholder='Password '
        />
        <button type='submit'>Login</button>
      </form>

      <div className='card'>
        <h3>Email: {emailValue}</h3>
        <h3>Password: {passwordValue}</h3>
      </div>
    </div>
  );
}
export default Login;
