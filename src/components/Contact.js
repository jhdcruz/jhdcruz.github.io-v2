import React, {Component} from "react";

import "./styles/Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <div className="container" id="ContactForm">
        <h2 className="has-text-centered" id="contacts">
          Contact
        </h2>
        <hr/>
        <form
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact"/>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">From</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"/>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"/>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Purpose</label>
            </div>
            <div className="field-body">
              <div className="field is-narrow">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select required>
                      <option>General</option>
                      <option>Feedback</option>
                      <option>Contract</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Subject</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. We would like you to make something for us"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Message</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <p className="help">
                  Information that are submitted are kept confidential.
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label"/>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button className="button is-outlined" type="submit">
                    Submit
                  </button>
                </div>
                <div data-netlify-recaptcha="true"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
