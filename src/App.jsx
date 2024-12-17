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
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-time
        </label>
        </fieldset>
        
        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);