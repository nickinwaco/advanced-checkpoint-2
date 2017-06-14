import React from 'react';
import Link from 'next/link';
import LoginComponent from '../components/Login';

function LoginPage() {
  return (
    <div>
      <h1>
        Login page
      </h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <LoginComponent />


    </div>
  );
}

export default LoginPage;
