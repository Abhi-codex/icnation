import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DetailBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

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
    return <div className="text-center text-white p-8">Blog not found</div>;
  }

  return (
    <div className="bg-[rgb(2,28,51)] text-white min-h-screen flex flex-col">
      <header className="w-full bg-[rgb(2,28,51)] p-8">
        <h1 className="text-4xl font-extrabold">{blog.title}</h1>
        <p className="text-lg mt-2 text-gray-300">
          {new Date(blog.createdAt).toLocaleDateString()} | {blog.readTime}
        </p>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-8">
        <img
          alt="blog"
          src={`http://localhost:500${blog.image}`}
          className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200">{blog.title}</h2>
          <p className="text-lg text-gray-300">{blog.description}</p>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="font-light text-gray-400 leading-relaxed">{blog.content}</p>
        </div>
        
        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}  // This will navigate the user to the previous page
            className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
          >
            Back
          </button>
        </div>
      </main>

      <footer className="bg-[rgb(2,28,51)] p-6 text-center">
        <p className="font-medium text-gray-300">Written by {blog.author}</p>
      </footer>
    </div>
  );
};

export default DetailBlog;
