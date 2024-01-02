// In React 18+ you don't have to import React in each component.

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers, which is being passed in as customers
 *
 * Step 1: Create a <table> element, with a <tr> that has 3 <td>
 *         elements for First Name, Last Name, and Appointment Time
 * Step 2: Create another <tr> element that will .map() over this.customersArray
 *         and return 3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Wrap the appropriate sections in a <tbody> <thead> element.
 *
 *         Hint: {customersArray.map((customer, index) => (
 *                    //return your elements here
 *                    //Each <tr> will also need a key={index} property
 *                    ))}
 *
 * Step 3: Style it with css using the App.css file!
 *
 */

function Appointments({ customers }) {
  return (
    <table className='appointmentsTable'>
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Appointment Time</td>
        </tr>
      </thead>
      <tbody>
        {/* Below we map over the customers and create a new table row for each one */}
        {/* Remember that each new child of this return must have a unique key, */}
        {/*  thats why we assign index to the key value */}
        {customers.map((customer, index) => (
          // notice in our map we use customer in the singular and the array of customers
          // is in the plural, this makes it easier to resolve what is going on when use the values.
          <tr key={index}>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.appointmentTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Appointments;
