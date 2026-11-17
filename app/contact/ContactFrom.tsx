
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <label>
          Full Name *
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </label>

        <label>
          Company Name
          <input
            type="text"
            name="company"
            placeholder="Your company name"
          />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          Business Email *
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
          />
        </label>
      </div>

      <label>
        Interested In *
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="B2B Contact Database">
            B2B Contact Database
          </option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Data Enrichment">Data Enrichment</option>
          <option value="Business Data Solutions">
            Business Data Solutions
          </option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Your Message *
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your business requirements..."
          required
        />
      </label>

      <button type="submit" className="contact-submit-btn">
        Submit Enquiry <span>→</span>
      </button>

      {submitted && (
        <p className="contact-success-message" role="status">
          Thank you! Your form is working in demo mode. Email submission will
          be enabled after backend integration.
        </p>
      )}

      <small className="contact-form-note">
        Your information is requested to understand your business enquiry.
      </small>
    </form>
  );
}
