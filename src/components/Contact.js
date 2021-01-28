import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Loading from './Loading';
import Success from './Success';

function Contact() {
  const [state, handleSubmit] = useForm("contact");
  if (state.submitting) {
    return <Loading />;
  }

  if (state.succeeded) {
    return <Success />;
  }

  return (
      <div id="contact">
        <h1 id="contactHeader">Contact</h1>
        <form onSubmit={handleSubmit}>
          <div id="infoInput">
            <div className="fieldBox">
              <ValidationError
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
              <input 
                type="text" 
                placeholder="Name" 
                name="name">
              </input>
            </div>
            <div className="fieldBox">
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="email">
              </input>
            </div>
          </div>
          <div className="fieldBox">
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <textarea 
              placeholder="Message" 
              name="message">
            </textarea>
          </div>
          <button id="sendMessageButton" type="submit" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
  );
}

export default Contact;