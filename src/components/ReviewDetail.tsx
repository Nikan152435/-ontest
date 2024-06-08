import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommentModel } from '../types';

const ReviewDetail: React.FC = () => {
   // Добавляем тип 'string | undefined' для id, чтобы обработать случай, когда id отсутствует в URL
  const { id } = useParams<{ id: string }>();
  const [review, setReview] = useState<CommentModel | null>(null);

  useEffect(() => {
    // Проверяем, что id не является undefined, прежде чем загружать данные
    if (id) {
    // Эмулируем загрузку данных по ID
    setTimeout(() => {
      setReview({
        id,
        createDT: '2024-06-08',
        text: 'Great product!',
        isLike: true,
        user: { username: 'User1' },
      });
    }, 1000);
  }
  }, [id]);
// Если review равен null, показываем сообщение "Loading..."
  if (!review) {
    return <div>Loading...</div>;
  }
// Показываем данные отзыва
  return (
    <div>
      <h2>Review Detail</h2>
      <p>{review.text}</p>
      <p>Author: {review.user?.username}</p>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
};

export default ReviewDetail;