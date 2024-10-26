import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer.tsx';
import { Link, Route, Routes } from 'react-router-dom';
import AddPostForm from './components/AddPostForm/AddPostForm.tsx';
import AboutPage from './containers/AboutPage/AboutPage.tsx';
import ContactsPage from './containers/ContactsPage/ContactsPage.tsx';

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Blog</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-post">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainContainer/>}/>
        <Route path="/new-post" element={<AddPostForm/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
      </Routes>
    </div>
  );
};

export default App;