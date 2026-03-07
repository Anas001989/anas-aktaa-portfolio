import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Replace with your EmailJS service ID, template ID, and public key in .env or here
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      setErrors({ form: 'Email service not configured. Add EmailJS keys in .env.' });
      return;
    }

    setStatus('sending');
    setErrors({});

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrors({ form: err.text || 'Failed to send. Check EmailJS config.' });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Get in touch or schedule a meeting</p>
      </div>
      <div className="contact-layout">
        <form className="contact-form card" onSubmit={handleSubmit}>
          {errors.form && (
            <div className="form-error" role="alert">
              {errors.form}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              aria-invalid={!!errors.subject}
            />
            {errors.subject && <span className="field-error">{errors.subject}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="form-success">Message sent successfully. I&apos;ll get back to you soon.</p>
          )}
        </form>
        <div className="contact-extra">
          <p>You can also connect via LinkedIn or GitHub from the footer or resume section.</p>
          <p className="contact-calendly">
            Optional: Add a Calendly or meeting link here for scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
