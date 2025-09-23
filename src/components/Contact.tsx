import React, { useState } from 'react';
import { FormValues, FormErrors } from '../types';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formValues.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Interested in collaborating or want to discuss a project? I'd love to hear from you.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-title">Email</h3>
              <p className="info-value">gurukiran@example.com</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-title">Location</h3>
              <p className="info-value">San Francisco Bay Area</p>
            </div>
            
            <div className="info-item">
              <h3 className="info-title">Social</h3>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Dribbble</a>
                <a href="#" className="social-link">Behance</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus === 'success' ? (
              <div className="form-success">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${formErrors.name ? 'error' : ''}`}
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${formErrors.email ? 'error' : ''}`}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control ${formErrors.subject ? 'error' : ''}`}
                    value={formValues.subject}
                    onChange={handleChange}
                  />
                  {formErrors.subject && <p className="form-error">{formErrors.subject}</p>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${formErrors.message ? 'error' : ''}`}
                    value={formValues.message}
                    onChange={handleChange}
                    rows={5}
                  ></textarea>
                  {formErrors.message && <p className="form-error">{formErrors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-button"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;