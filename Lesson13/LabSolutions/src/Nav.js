// In the past importing React as show in the commented out section on line 2, was was needed. In working with React 18+ you no longer need it outside the App.js or Index.js file.  
// import react from 'react'

function Nav() {
  
    return (
      <nav className="navBar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  };

export default Nav;