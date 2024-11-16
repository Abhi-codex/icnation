import React, { useEffect, useState } from 'react';
import Icon from '../../assets/Icon.png'; // Replace with your image path
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    author: '',
    image: Icon, 
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setNewBlog({ ...newBlog, image: URL.createObjectURL(file) });
    }
  };

  const handleAddNewBlog = async () => {
    try {
      const { title, author, description } = newBlog;

      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('description', description);
      if (selectedImage) {
        formData.append('image', selectedImage);
      }

      
      console.log('Title:', title);
      console.log('Author:', author);
      console.log('Description:', description);
      console.log('Selected Image:', selectedImage);

     
      const response = await axios.post('http://localhost:5000/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

     
      console.log('New blog added:', response.data);
      setShowModal(false);
      setData((prevData) => [...prevData, response.data]); 
    } catch (error) {
      console.error('Error adding new blog:', error.response || error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs');
        setData(response.data); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-8 min-h-screen bg-gray-800">
      <h1 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10 mb-4">Blogs</h1>

      <div className="flex flex-wrap gap-9">
        {data.map((post) => (
          <div
            key={post._id}
            className="m-2 overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 border-2 border-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-gray-400"
          >
            <Link to={`/blogs/${post._id}`} className="block w-full h-full">
              <img
                alt="blog"
                src={`http://localhost:5000${post.image}`}
                className="object-cover w-full max-h-40 bg-white"
              />
              <div className="w-full p-4 bg-gray-800">
                <p className="font-large text-indigo-500 text-md">Blog</p>
                <p className="mb-2 text-xl font-medium text-white">{post.title}</p>
                <p className="font-light text-gray-300 text-md">{post.description}</p>
                <div className="flex items-center mt-4">
                  <div className="relative block">
                    <img alt="author" src={Icon} className="mx-auto object-cover rounded-full h-10 w-10" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-white">{post.author}</p>
                    <p className="text-gray-300">{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
      <div className="flex p-4 mx-auto mt-4 w-52">
          <button
            type="button"
            onClick={handleOpenModal}
            className="w-full px-4 py-2 text-base font-semibold rounded-lg text-center text-white transition duration-200 ease-in shadow-md bg-gradient-to-r from-green-600 to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Add Blog
          </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newBlog.title}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBlog.author}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newBlog.description}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 mb-3"
            />
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddNewBlog}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
