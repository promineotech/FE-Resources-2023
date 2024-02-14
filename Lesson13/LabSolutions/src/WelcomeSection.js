// In the past importing React as show in the commented out section on line 2, was was needed. In working with React 18+ you no longer need it outside the App.js or Index.js file.
// import react from 'react'

// This function creates a variable for the date.
function WelcomeSection() {
  let date = new Date(); // Declares a date using Date() method.

  let singleUser = {
    // Declares our singleUser and applies the date, converted to string.
    name: "John",
    time: date.toDateString(),
  };

  // Remember to return one enclosed element. If not enclosed you will get an error.
  return (
    <div className='welcomeSection'>
      {/* Below we use singleUser with dot notiation to access the name and time properties. */}
      <h1>Welcome, {singleUser.name}</h1>
      <p>Todays date is: {singleUser.time}</p>
    </div>
  );
}
// Don't forget the export statement which exports the components for use elsewhere in your React app.
export default WelcomeSection;