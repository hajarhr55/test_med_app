import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="review-form-container">
      {!submitted ? (
        <>
          <h2>We'd love to hear your feedback!</h2> {/* جملة بداية النموذج */}
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select Rating</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="review">Your Review:</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </>
      ) : (
        <div className="review-thank-you">
          <h3>Thank you for your review!</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Rating:</strong> {rating} Star(s)</p>
          <p><strong>Review:</strong> {review}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
