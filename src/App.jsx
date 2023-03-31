import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blogs/Blog';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Blog/>
    </div>
  );
};

export default App;