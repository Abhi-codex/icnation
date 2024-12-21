// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DetailBlog = () => {
//   const { id } = useParams();
//   const [data, setData] = useState([]);
//   const [blog, setBlog] = useState(null);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/blogs');
//         setData(response.data);
//       } catch (err) {
//         console.log('Error fetching blog data:', err);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       const foundBlog = data.find(post => post._id === id);
//       setBlog(foundBlog);
//     }
//   }, [data, id]);

//   if (!blog) {
//     return <div className="text-center text-white p-8">Blog not found</div>;
//   }

//   return (
//     <div className="bg-[rgb(2,28,51)] text-white min-h-screen flex flex-col">
//       <header className="w-full bg-[rgb(2,28,51)] p-8">
//         <h1 className="text-4xl font-extrabold">{blog.title}</h1>
//         <p className="text-lg mt-2 text-gray-300">
//           {new Date(blog.createdAt).toLocaleDateString()} | {blog.readTime}
//         </p>
//       </header>
      
//       <main className="flex-1 flex flex-col items-center justify-start px-6 py-8">
//         <img
//           alt="blog"
//           src={`http://localhost:500${blog.image}`}
//           className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6"
//         />
        
//         <div className="space-y-6 max-w-3xl mx-auto">
//           <h2 className="text-2xl font-semibold text-gray-200">{blog.title}</h2>
//           <p className="text-lg text-gray-300">{blog.description}</p>
//         </div>
        
//         <div className="mt-8 max-w-3xl mx-auto">
//           <p className="font-light text-gray-400 leading-relaxed">{blog.content}</p>
//         </div>
        
//         {/* Back Button */}
//         <div className="mt-6">
//           <button
//             onClick={() => navigate(-1)}  // This will navigate the user to the previous page
//             className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
//           >
//             Back
//           </button>
//         </div>
//       </main>

//       <footer className="bg-[rgb(2,28,51)] p-6 text-center">
//         <p className="font-medium text-gray-300">Written by {blog.author}</p>
//       </footer>
//     </div>
//   );
// };

// export default DetailBlog;



import { useNavigate } from 'react-router-dom';



 

const DetailBlog = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="bg-[rgb(2,28,51)] text-white min-h-screen flex flex-col">
      <header className="w-full bg-[rgb(2,28,51)] p-8">
        <h1 className="text-4xl font-extrabold">CUTTING EDGE OF MECHANICAL ENGINEERING</h1>
        <p className="text-lg mt-2 text-gray-300">
        11-08-2024
        </p>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-8">
        <img
          alt="blog"
           src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg'
          className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover rounded-lg shadow-lg mb-6"
        />
        
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-200">CUTTING EDGE OF MECHANICAL ENGINEERING</h2>
          <p className="text-lg text-gray-300">GLIMPSE OF THE CUTTING EDGE OF MECHANICAL ENGINEERING</p>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="font-light text-gray-400 leading-relaxed">Mechanical engineering is one of the oldest, diverse, royal and versatile branches
of engineering which over time, has contributed to several innovations, it deals
with the concepts of thermodynamics, fluids, mechanics and structural analysis
furthermore design, manufacturing, maintenance. Testing of machines etc.
Mechanical engineering develops analytical thinking, logical reasoning and of
course trans disciplinary skills in its curriculum that’s why mechanical engineer
can do any engineering domain job as far as the syllabus of the complete tenure
and respective subjects is concern. Mechanical engineering sets ground to develop
skills in the most niche and in-demand areas like AI, ML, Data Science, IoT etc.
by incorporating related subjects like C programming, python, cloud computing,
AI and IoT in the curriculum. So, a student opting for mechanical engineer would
be a complete package to work in the upcoming technological revolution like
Industry 4.0.
“Digitalization via optimization modelling is a key to updating and enhancing
mechanical engineering to the current customers’ requirements and coping with
modern technological developments”.
Opportunities are vast and innumerable for mechanical engineers with strong
knowledge base in their area together with a hand and foot in automation, iot, ai,
big data, simulation, plc programming, systems approach, clouds, cyber physical
systems, ai and automation and design thinking. the only caveat for any individual
aspiring to work in this area is to stay open eyed, open minded and alert to the
changes in this field which are almost overwhelming owing to rapid technological
progress.
“Any missing piece (stream) makes the puzzle of development & growth
incomplete”, means no individual branch has standalone existence in this
technological revolution, all branches complement each other.
“What we know is just a tip of iceberg, as we explore more, you will gradually
get insights on the broad prospects of mechanical engineering”</p>
        </div>
        
       
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
        <p className="font-medium text-gray-300">Written by Ankit Agarwal</p>
      </footer>
    </div>
  );
};

export default DetailBlog;
