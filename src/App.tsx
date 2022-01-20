import React, { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import blogService from './services/blogs';

const App = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        blogService.getAll().then((blogs) => setBlogs(blogs));
    });

    return (
        <div className="App">
            <h2>Blogs</h2>
            {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />
            ))}
        </div>
    );
};

export default App;
