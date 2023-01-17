import { useState } from "react";
import Input from "./Component/Input";
const initialValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
}

function App() {
  const [state, setState] = useState(initialValue)

  const formFields = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      label: "Username",
      required : "true",
      autoComplete : "off",
      pattern : "^[A-Za-z0-9]{3,16}$",
      errorMessage : "Username should be 3-16 character & shouldn't includes any special character!"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      required : "true",
      autoComplete : "off",
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      required : "true",
      autoComplete : "off",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required : "true",
      autoComplete : "off",
    }
  ]

  const onChange = (e) => {
    // console.log(e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
    // console.log(state)
  }

  const handleSubmit = (e) => {
     e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        formFields.map((obj) => (
          <Input key={obj.id} {...obj} onChange={onChange} value={state[obj.name]} />
        ))
      }
      <button className="button">Submit</button>
    </form>
  );
}

export default App;
