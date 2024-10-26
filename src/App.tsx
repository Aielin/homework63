import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer.tsx';
import { Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails.tsx';
import AddPostForm from './components/AddPostForm/AddPostForm.tsx';
import EditPostForm from './components/EditPostForm/EditPostForm.tsx';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/new-post" element={<AddPostForm />} />
        <Route path="/posts/:id/edit" element={<EditPostForm />} />
      </Routes>
  );
};

export default App;