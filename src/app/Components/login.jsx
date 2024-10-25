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
        <div className=' p-4'>
          <label>Username<input  className=' border rounded'/></label>
          <br />
          <label>Password<input type='text' className=' border rounded'/></label>
        </div>
      </main>
    </div>
  );
}

export default Login;
