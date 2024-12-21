// import React, { useEffect, useState } from 'react';
// import Icon from '../../assets/Icon.png'; // Replace with your image path
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Blogs = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [data, setData] = useState([]);
//   const [newBlog, setNewBlog] = useState({
//     title: '',
//     description: '',
//     author: '',
//     image: Icon,
//   });
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewBlog({ ...newBlog, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       setNewBlog({ ...newBlog, image: URL.createObjectURL(file) });
//     }
//   };

//   const handleAddNewBlog = async () => {
//     try {
//       const { title, author, description } = newBlog;
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('author', author);
//       formData.append('description', description);
//       if (selectedImage) {
//         formData.append('image', selectedImage);
//       }

//       const response = await axios.post('http://localhost:5000/blogs', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setShowModal(false);
//       setData((prevData) => [...prevData, response.data]);
//     } catch (error) {
//       console.error('Error adding new blog:', error.response || error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/blogs');
//         setData(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center p-8 bg-[rgb(2,28,51)]">
//       <h1 className="text-4xl font-extrabold leading-tight text-white mb-12">Blogs</h1>
  
//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {data.map((post) => (
//           <div
//             key={post._id}
//             className="overflow-hidden rounded-lg shadow-lg bg-[rgba(2, 28, 51, 0.68)] border border-gray-600 hover:shadow-2xl transform hover:scale-105 transition duration-300"
//           >
//             <Link to={`/blogs/${post._id}`} className="block">
//               <img
//                 alt="blog"
//                 src={`http://localhost:5000${post.image}`}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
//                 <p className="text-gray-300 text-sm mb-4">{post.description}</p>
//                 <div className="flex items-center">
//                   <img
//                     alt="author"
//                     src={Icon}
//                     className="w-10 h-10 rounded-full border border-gray-500"
//                   />
//                   <div className="ml-3">
//                     <p className="text-white font-medium text-sm">{post.author}</p>
//                     <p className="text-gray-400 text-xs">{new Date(post.createdAt).toLocaleDateString()}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
  
  
 
// };

// export default Blogs;  



import React from 'react';
import Icon from '../../assets/Icon.png'; // Replace with your image path


const Blogs = () => {

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[rgb(2,28,51)]">
      <h1 className="text-4xl font-extrabold leading-tight text-white mb-12">Blogs</h1>
  
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
          <div
            // key={post._id}
            className="overflow-hidden rounded-lg shadow-lg bg-[rgba(2, 28, 51, 0.68)] border border-gray-600 hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
             <a href='/blogs/Detailvlog' className="block"> 
              <img
                alt="blog"
                src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg'
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2"> CUTTING EDGE OF MECHANICAL ENGINEERING</h3>
                <p className="text-gray-300 text-sm mb-4">GLIMPSE OF THE CUTTING EDGE OF MECHANICAL ENGINEERING</p>
                <div className="flex items-center">
                  <img
                    alt="author"
                    src={Icon}
                    className="w-10 h-10 rounded-full border border-gray-500"
                  />
                  <div className="ml-3">
                    <p className="text-white font-medium text-sm">Ankit agarwal</p>
                    <p className="text-gray-400 text-xs">11-08-2024</p>
                  </div>
                </div>
              </div>
            </a> 
          </div>
       
      </div>
    </div>
  );
  
  
 
};

export default Blogs;  