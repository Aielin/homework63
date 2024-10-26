import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Post {
  title: string;
  date: string;
  content: string;
}

const postData:Record<number, Post> = {
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPostForm;
