import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Post {
  title: string;
  date: string;
  content: string;
}

const postData: Record<number, Post> = {
  1: {
    title: 'Something incredible happened just now...',
    date: '22.02.2018 15:10',
    content: 'This is the full content of the first post.'
  },
  2: {
    title: 'Another blog title.',
    date: '22.02.2018 15:10',
    content: 'This is the full content of the second post.'
  }
};

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || '', 10);
  const post = postData[postId as keyof typeof postData];

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleEdit = () => navigate(`/posts/${id}/edit`);
  const handleDelete = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.content}</p>
      <div className="mt-4">
        <button className="btn btn-warning me-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger me-2" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
