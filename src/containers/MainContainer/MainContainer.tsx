import React, { useEffect, useState } from 'react';
import PostItem from '../../components/PostItem/PostItem.tsx';
import Spinner from '../../UI/Spinner/Spinner.tsx';
import './MainContainer.css';


interface Post {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const posts: Post[] = [
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
      <h1 className="text-center text-warning mb-4">My Blog</h1>

      {loading ? (
        <div className="post-list">
          <Spinner/>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MainContainer;
