import React, { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import blogService from './services/blogs';
import loginService from './services/login';
import { BlogT } from './types';

interface User {
    token: string;
    username: string;
    name: string;
}

const App = () => {
    // union type for blogs
    const [blogs, setBlogs] = useState<BlogT[] | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User | null>(null);

    const hadleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const user = await loginService.login({
                username,
                password,
            });
            blogService.setToken(user.token);
            setUser(user);
            setUsername('');
            setPassword('');
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        blogService.getAll().then((blogs) => setBlogs(blogs));
    }, []);

    return (
        <div className="App">
            <h2>Blogs</h2>
            {user === null ? (
                <LoginForm
                    handleLogin={hadleLogin}
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                />
            ) : (
                <h2>User {user.username} logged in</h2>
            )}
            {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
        </div>
    );
};

export default App;
