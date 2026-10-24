import React from 'react'

/*
Stateless component (Pure Component/Presentation Component/Stateless component)
- just only present the props.
- don’t need a state.
- reuse components. 

Stateful component 
- Has state or props or the both
- Contains logic code in component.
- Dependent on state for rendering, 
- such as fetching data.
- Elements that are interactive on page.
- Elements that accept user input.

How many ways to component  re-render?
- State changes
- Props changes
- Parent component re-render
*/


function ReactState() {
  const [inputFirstName,  setInputFirstName] = React.useState('');
  const [inputLastName, setInputLastName] = React.useState('');
  
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    message: {
      text: '',
      total: 100
    }
  }); // memory C

  function handleUpdateName() {
    // form.firstName = inputFirstName;
    // form.lastName = inputLastName;
    // setForm(form); // memory A don't work

    // const newForm = { // memory C
    //   firstName: inputFirstName,
    //   lastName: inputLastName
    // }
    // setForm(newForm) // memory C

    setForm((prevState) => {
      console.log('prevState: ', prevState)
      return {
        ...prevState, // copy all properties object
        firstName: inputFirstName,
        lastName: inputLastName,
        message: {
          ...prevState.message,
          text: 'tony' + Date.now()
        }
      }
    })
  }

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setInputFirstName(event.target.value)
  }

  function onChangeLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setInputLastName(event.target.value)
  }

  console.log('ReactState: ', form)
  return (
    <div>
      <h1>ReactState</h1> 
       <br />
      First Name: {form.firstName}<input type="text" value={inputFirstName} onChange={onChangeName} /> <br />
      Last Name: {form.lastName} <input type="text" value={inputLastName} onChange={onChangeLastName} /> <br />
      Age: {form.message.text} <br />
      Total: {form.message.total} <br />

      <button type="button" onClick={handleUpdateName}>Update Name</button>
    </div>
  )
}

export default ReactState;