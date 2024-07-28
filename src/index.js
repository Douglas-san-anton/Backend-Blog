import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRoutes from './routes/postsRouter.js';
import authRoutes from './routes/authRouter.js';

dotenv.config();

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session Middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/posts', postRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
