import React from "react";
import "../../Styles/Singup.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illastitor from "../Illastitor";
import TextInput from '../../component/TextInput';

export default function Signup() {
  return (
    <div>
      <h1> Create an account</h1>

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
              type="text"
              placeholder=" Enter your Email"
              icon="alternate_email"
            />

            <TextInput
              type="password"
              placeholder=" Enter your password"
              icon="lock"
            />

            <TextInput
              type="password"
              placeholder=" Conform password"
              icon="lock_clock"
            />
            <Checkbox text=" I agree to the Terms & Conditions" />
            <Button text="Submit Now"/>
            <div class="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
          </>
        </Form>
      </div>
    </div>
  );
}
