import React from 'react';

function Login() {
  return (
    <div className=' '>
      <div className=' bg-orange-500'>
        <img src='logo.svg' className=' ' />
      </div>

      <main>
        <div>
          <h1 className=' text-9xl'>Log In</h1>
        </div>
        <div>
          <label>Username<input /></label>
        </div>
      </main>
    </div>
  );
}

export default Login;
