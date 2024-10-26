import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

const EditPostForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || '', 10);
  const post = postData[postId as keyof typeof postData];

  const [title, setTitle] = useState(post ? post.title : '');
  const [date, setDate] = useState(post ? post.date : '');
  const [content, setContent] = useState(post ? post.content : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPost = { title, date, content };
    console.log('Updated Post:', updatedPost);

    navigate('/');
  };

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="edit-post-form">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPostForm;
