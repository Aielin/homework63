import React from 'react';
import PostItem from '../../components/PostItem/PostItem.tsx';
import { Link } from 'react-router-dom';


const posts = [
  {
    id: 1,
    title: 'Something incredible happened just now...',
    date: '22.02.2018 15:10',
    summary: 'Read more to find out!'
  },
  {
    id: 2,
    title: 'Another blog title.',
    date: '22.02.2018 15:10',
    summary: 'Just another blog post summary.'
  }
];

const MainContainer: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>My Blog</h1>
      <Link to="/new-post">
        <button>Add New Post</button>
      </Link>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          summary={post.summary}
        />
      ))}
    </div>
  );
};

export default MainContainer;
