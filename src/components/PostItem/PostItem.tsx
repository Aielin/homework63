import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, date, summary }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post-item">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{summary}</p>
      <button onClick={handleReadMore}>Read more &gt;&gt; </button>
    </div>
  );
};

export default PostItem;
