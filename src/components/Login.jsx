import { useState } from 'react';

function Login(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // state for errors
  const [errorValue, setErrorValue] = useState('');

  // if set true, hide form, show success
  const [formSuccess, setFormSuccess] = useState(false);

  function emailInputHandler(e) {
    setEmailValue(e.target.value);
  }

  function passwordInputHandler(e) {
    setPasswordValue(e.target.value);
  }
  // susikurti state email ir passwordui.
  // susieti su two way binding inputus su state
  // atvaizduoti htmle/jsx ivestas reiksmes

  function loginHandler(event) {
    // stabdyti puslapio perkrovima
    event.preventDefault();
    // clear all errors
    setErrorValue('');
    console.log('react con trolls the form');
    // cia mes dirbam su state reiksmem  emailValue ir passwordValue
    console.log({ emailValue, passwordValue });

    // mini validation: jei neivesta kazkuri reikme tai klaida

    if (emailValue === '' || passwordValue === '') {
      console.warn('labai blogai nes kazkas neivesta !!!!!!!!!!');
      // setError
      setErrorValue('Prasome uzpildyti visus laukus');
      return;
    }

    console.log('viskas gerai siunciam forma >>>>>> ');

    sendLoginReq({ email: emailValue, password: passwordValue });
  }

  const showError = errorValue !== '';

  function sendLoginReq(loginObj) {
    const url = 'https://reqres.in/api/login';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(loginObj),
    })
      .then((resp) => resp.json())
      .then((dataInJs) => {
        console.log('dataInJs ===', dataInJs);
        if (dataInJs.error) {
          console.log('klaida');
          // jei klaida tai setinam klaida
          setErrorValue(dataInJs.error);
        }
        if (dataInJs.token) {
          // jei sekme ta consolinam sekme ,
          console.log('sekme');
          // jei sekme paslepti forma ir parodyti Sveikinimo kortele.
          setFormSuccess(true);
        }
      })
      .catch((err) => console.warn('login error', err));
  }

  return (
    <div>
      {formSuccess ? (
        <h3>Your form was sent successfuly {emailValue}</h3>
      ) : (
        <form onSubmit={loginHandler} className='card'>
          {showError && <h3 className='errorAlert'>{errorValue}</h3>}

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
      )}

      <div className='card'>
        <h3>Email: {emailValue}</h3>
        <h3>Password: {passwordValue}</h3>
      </div>
    </div>
  );
}
export default Login;