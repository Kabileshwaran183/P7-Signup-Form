
export default function App() {

  function signUp(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const formData = new FormData(event.target); // Access the form data
    /*
    const email = formData.get("email")
    */
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const data = Object.fromEntries(formData)
    const allData = {
          ...data,
          dietaryRestrictions
    }
    console.log(allData); // Log form data as an object
  }

  return (
    <section>
      <div className="left">
      <h1>Signup</h1>
      <img src="/assets/image.png"></img>
      </div>
      <form onSubmit={signUp}>

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
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <button>Submit</button>

      </form>
    </section>
  )
}
