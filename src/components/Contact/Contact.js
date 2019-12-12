import React from "react";
import "dependency/bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Button, ContactForm, Form, GlobalStyle, Label, Notice, Title } from "./Contact.styled";

// * Sender's Info
function UserInfo() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">From</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="John Doe"
              name="name"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// * Contact Category
function ContactPurpose() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Purpose</Label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select name="category" required>
                <option>General</option>
                <option>Feedback</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// * Subject / Headline
function Subject() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Subject</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="e.g. We would like you to make something for us"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// * Message / Textarea
function MessageContent() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Message</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              name="message"
              placeholder="How can I help you?"
              required
            />
          </div>
          <Notice>Information that are submitted are kept confidential.</Notice>
        </div>
      </div>
    </div>
  );
}

// * Submit Button
function Submit() {
  return (
    <div className="field is-horizontal">
      <div className="field-label" />
      <div className="field-body">
        <div className="field">
          <div className="control">
            <Button
              className="button is-outlined pageclip-form__submit"
              type="submit"
              value="Send"
            >
              <span>
                <i className="fas fa-paper-plane" /> Submit
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <ContactForm className="container">
      <Title>Contact</Title>
      <hr />

      {/* Action refers to contact email holder by pageclip */}
      <Form
        action="https://send.pageclip.co/JZD6iGzQPMMrmy6xu1EaaeqSPjOwv9yE/Contact"
        className="pageclip-form"
        method="post"
      >
        <GlobalStyle />
        <UserInfo />
        <ContactPurpose />
        <Subject />
        <MessageContent />
        <Submit />
      </Form>
    </ContactForm>
  );
}
