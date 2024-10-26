import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { title, date, content };
    console.log('New Post:', newPost);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Add New Post</h2>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="text"
            className="form-control"
            id="post-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="post-content"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
