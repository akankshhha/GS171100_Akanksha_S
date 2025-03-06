import React, { useState } from "react";

const Login: React.FC = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()

    const formInputErrors: {email?: string, password?: string} = {}

    if(!userEmail.trim()) {
      formInputErrors.email = 'Email is required!'
    } else if(!(/\S+@\S+\.\S+/.test(userEmail))) {
      formInputErrors.email = 'Please enter a valid email ID.!'
    }

    if(!userPassword.trim()) {
      formInputErrors.password = 'Password is required!'
    } else if(!(/\S+@\S+\.\S+/.test(userEmail))) {
      formInputErrors.password = 'Please enter a valid email ID.!'
    }

    if(Object.keys(formInputErrors).length == 0) {
      alert("Signed in successfully!")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-100 p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>  
        <p className=''>For internal use only.</p>    
      </div>
    </div>
  );
};

export default Login;
