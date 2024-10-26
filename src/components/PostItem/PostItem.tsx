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
    <div className="post-item card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{date}</p>
        <p className="card-text">{summary}</p>
        <button className="btn btn-warning" onClick={handleReadMore}>
          Read more &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default PostItem;
