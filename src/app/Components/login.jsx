import React from 'react';

function Login() {
  return (
    <div className=' '>
      <div className=' bg-orange-500'>
        <img src='logo.svg' className=' postion' />
      </div>

      <main>
        <div>
          <h1 className=' text-4xl'>Log In</h1>
        </div>
        <div>
          <label>Username<input /></label>
          <br />
          <label>Password<input /></label>
        </div>
      </main>
    </div>
  );
}

export default Login;
