import React from 'react';
import TextInput from '../../component/TextInput';
import "../../Styles/Singup.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illastitor from "../Illastitor";
export default function Login() {
  return (
    <div>
      <h1> Create to your account</h1>

      <div className="column">
        <Illastitor />

        <Form className="signup">
          <>
            <TextInput
              type="text"
              placeholder=" Enter your name"
              icon="person"
            />

          

            <TextInput
              type="password"
              placeholder=" Enter your password"
              icon="lock"
            />

            <Checkbox text=" I agree to the Terms & Conditions" />
            <Button/>
            <div class="info">
              Don't have an account? <a href="login.html">Singup</a> instead.
            </div>
          </>
        </Form>
      </div>
    </div>
  )
}
