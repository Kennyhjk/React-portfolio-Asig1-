import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been received.');
    navigate('/');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#FFC74F',
    color: '#3d3d3d',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', color: '#3d3d3d' }}>
        <h1>Contact Me</h1>

        <div style={{ marginBottom: '30px' }}>
          <p><strong>Email:</strong> hyojin@Kimail.com</p>
          <p><strong>Phone:</strong> +1 (437) 456-7890</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
