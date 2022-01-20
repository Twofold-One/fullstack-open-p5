import React from 'react';
import { BlogT } from '../types';

interface BlogProps {
    blog: BlogT;
}

const Blog = ({ blog }: BlogProps) => <div>{blog.title}</div>;

export default Blog;
