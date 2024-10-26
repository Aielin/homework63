import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = { title, date, content };
    console.log('New Post:', newPost);
    navigate('/');
  };

  return (
    <div className="add-post-form">
      <h2>Add New Post</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddPostForm;
