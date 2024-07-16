import React from 'react';

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="newsletter-form">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
