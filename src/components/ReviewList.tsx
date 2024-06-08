import React, { useState, useEffect } from 'react';
import { CommentModel } from '../types';
import { Link } from 'react-router-dom';
// import { LikeDislikeButton } from '../react-like-dislike-button'; // Импорт компонента LikeDislikeButton
import './ReviewList.css'; // Импортируем стили CSS

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<CommentModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    setTimeout(() => {
      // Эмулируем загрузку данных
      setReviews([
        {
          id: '1',
          createDT: '2024-06-08',
          text: 'Great product!',
          isLike: true,
          user: { username: 'User1' },
        },
        // Добавьте другие отзывы
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Review List</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Link to={`/reviews/${review.id}`}>{review.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;