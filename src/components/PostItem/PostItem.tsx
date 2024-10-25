import React from 'react';

interface PostItemProps {
  title: string;
  date: string;
  summary: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, date, summary }) => {
  return (
    <div className="post-item">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{summary}</p>
      <button>Read more &gt;&gt; </button>
    </div>
  );
};

export default PostItem;
