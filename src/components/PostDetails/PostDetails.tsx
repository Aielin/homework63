import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const postData = {
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

  const handleDelete = () => {
    console.log(`Post with ID ${postId} deleted`);
    navigate('/');
  };

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default PostDetails;
