
/*
uncontroller input / uncontroller component
- Uncontrolled inputs are like traditional HTML form inputs:
- Don’t cause re-render component.
- The input value is not being managed by React.
- We are using DOM manipulation to access and manipulate the value of the input element.

Controlled component
- The value  is handled by the react state.
- Component re-render every change input
*/

import type { FormEvent } from "react"
import Button from "../../components/ui/button"
import React from "react";


function Form() {
  const firstNameRef = React.useRef(null);
  const [lastName, setLasName] = React.useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('form: ', {
      firstName: firstNameRef.current.value,
      lastName: lastName
    })
  }

  console.log('Form render')
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        First Name: <input type="text" defaultValue={'tony'} ref={firstNameRef} /> <br /><br />
        Last Name: <input type="text" value={lastName} onChange={(e) => setLasName(e.target.value)} /> <br />
        <br />
        <Button type="submit">Submit</Button>
      </form>

     
    </div>
  )
}

export default Form
