import React from 'react';


function LoginComponent() {
  return (
    <div>
      <h2>
        Login Component Test
      </h2>
      <form>
              Username <input type='text' name='username'></input><br/>
              Password <input type='text' name='password'></input><br/>
              <input type='submit' value='submit'></input>
            </form>



    </div>
  );
}

export default LoginComponent;
