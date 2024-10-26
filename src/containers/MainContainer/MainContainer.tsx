import React, { useEffect, useState } from 'react';
import PostItem from '../../components/PostItem/PostItem.tsx';
import { Outlet } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner.tsx';


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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="container mt-5">
      <h1>My Blog</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="main-content">
          <div className="posts-list">
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

          <div className="post-details w-50">
            <Outlet/>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
