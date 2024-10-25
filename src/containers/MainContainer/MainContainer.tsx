import React from 'react';
import PostItem from '../../components/PostItem/PostItem.tsx';

const posts = [
  {
    title: 'Something incredible happened just now...',
    date: '22.02.2018 15:10',
    summary: 'Read more to find out!'
  },
  {
    title: 'Another blog title.',
    date: '22.02.2018 15:10',
    summary: 'Just another blog post summary.'
  }
];

const MainContainer: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>My Blog</h1>
      {posts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title}
          date={post.date}
          summary={post.summary}
        />
      ))}
    </div>
  );
};

export default MainContainer;
