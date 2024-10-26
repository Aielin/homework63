import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer.tsx';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import AddPostForm from './components/AddPostForm/AddPostForm.tsx';
import AboutPage from './containers/AboutPage/AboutPage.tsx';
import ContactsPage from './containers/ContactsPage/ContactsPage.tsx';
import './App.css';
import PostDetails from './components/PostDetails/PostDetails.tsx';
import EditPostForm from './components/EditPostForm/EditPostForm.tsx';

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Blog
          </Link>
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/new-post" className="nav-link">
              Add
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              Contacts
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/:id/edit" element={<EditPostForm />} />
        <Route path="/new-post" element={<AddPostForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};

export default App;