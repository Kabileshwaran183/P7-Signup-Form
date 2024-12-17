import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

  function signUp(formData) {
    const email = formData.get("email")
    console.log(email)
    const password = formData.get("password")
    console.log(password)
  }

  return (
    <section>
      <div className="left">
      <h1>Signup</h1>
      <img src="/assets/image.png"></img>
      </div>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);