const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Database = require('./database');
const router = require('./router/icnrouter');
const multer = require("multer");
const path = require("path");
const Blog = require("./models/blogmodel");

app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};

app.use(cors(corsOption));
Database();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '8mb' }));
app.use(router);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('Hello');
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage });


app.post("/blogs", upload.single("image"), async (req, res) => {
  console.log('Received body:', req.body); 
  console.log('Received file:', req.file); 

  try {
    const { title, author, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

   
    if (!title || !author || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBlog = new Blog({
      title, // Updated to 'title'
      author,
      description,
      image,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error saving blog:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
