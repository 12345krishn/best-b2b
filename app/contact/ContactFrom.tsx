"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name: <span>*</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        E-mail: <span>*</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your business email"
          required
        />
      </label>

      <label>
        Mobile No: <span>*</span>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your mobile number"
          required
        />
      </label>

      <label>
        Enquiry: <span>*</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your data requirements"
          required
        />
      </label>

      <label>
        Interested In:
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select your requirement
          </option>
          <option value="B2B Contact Database">B2B Contact Database</option>
          <option value="Company Database">Company Database</option>
          <option value="Professional Contact Database">
            Professional Contact Database
          </option>
          <option value="Exhibition Data">Exhibition Data</option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Data Enrichment">Data Enrichment</option>
          <option value="City and State Wise Data">
            City & State Wise Data
          </option>
          <option value="Bulk Data Package">Bulk Data Package</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <div className="contact-verification">
        <strong>Verification:</strong>
        <span className="verification-code">B2B26</span>
        <input
          type="text"
          name="verification"
          placeholder="Enter code"
          aria-label="Enter verification code"
        />
      </div>

      <div className="contact-form-buttons">
        <button type="submit">SUBMIT</button>
        <button
          type="reset"
          className="contact-reset-btn"
          onClick={() => setSubmitted(false)}
        >
          RESET
        </button>
      </div>

      {submitted && (
        <p className="contact-success-message" role="status">
          Thank you for your enquiry. This form is currently in demo mode;
          your details have not been sent.
        </p>
      )}

      <p className="contact-form-note">
        Your information will be used to understand your business enquiry.
      </p>
    </form>
  );
}