const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const quizRoutes = require('./routes/quiz.routes');
const userRoutes = require('./routes/user.routes');
const courseRoutes = require('./routes/course.routes');
const addToCardRoutes = require('./routes/addToCard.routes');
const sliderRoutes = require('./routes/silder.routes');
const logoRoutes = require('./routes/logo.routes');
const testimonialRoutes = require('./routes/testimonial.routes');
const courseVideoRoutes = require('./routes/courseVideo.routes');
const eventRoutes = require('./routes/event.routes');
const questRoutes = require('./routes/quest.routes');


require('dotenv').config();

const app = express();
const server = http.createServer(app); 
app.use(express.json({ limit: '25mb' })); // For JSON payload
app.use(express.urlencoded({ extended: true, limit: '25mb' })); // Fo

// Serve the frontend
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
// Increase the payload size limit



// MongoDB connection
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));
  
// Routes
app.use('/users', userRoutes);
app.use('/quiz', quizRoutes);
app.use('/course', courseRoutes);
app.use('/video', courseVideoRoutes);
app.use('/add-to-card', addToCardRoutes);
app.use('/slider', sliderRoutes);
app.use('/logo', logoRoutes);
app.use('/testimonial', testimonialRoutes);
app.use('/event', eventRoutes);
app.use('/guest', questRoutes);
app.get("/", (req,res)=>{
  res.send("server app is running....")
})
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
