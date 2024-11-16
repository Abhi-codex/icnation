import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailBlog = () => {
  const { id } = useParams(); 
  const [data, setData] = useState([]); 
  const [blog, setBlog] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs'); 
        setData(response.data);
      } catch (err) {
        console.log('Error fetching blog data:', err);
      }
    };

    fetchData();
  }, []);

 
  useEffect(() => {
    if (data.length > 0) {
      const foundBlog = data.find(post => post._id === id); 
      setBlog(foundBlog); 
    }
  }, [data, id]);

  
  if (!blog) {
    return <div className="text-center text-white">Blog not found</div>;
  }

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <header className="w-full bg-gray-900 p-6">
        <h1 className="text-3xl font-extrabold">{blog.title}</h1>
        <p className="text-lg mt-2">{blog.date} | {blog.readTime}</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">
        <img alt="blog" src={`http://localhost:500${blog.image}`} className="w-1/4 h-90 object-cover rounded-md mb-4"/>
        <div className="space-y-4">
          <h2 className="text-2xl font-medium">{blog.title}</h2>
          <p className="text-lg font-light text-gray-300">{blog.description}</p>
        </div>
        <div className="mt-8">
          <p className="font-light text-gray-400">{blog.content}</p>
        </div>
      </main>
      <footer className="bg-gray-900 p-4 text-center">
        <p className="font-medium text-gray-300">Written by {blog.author}</p>
      </footer>
    </div>
  );
};

export default DetailBlog;
