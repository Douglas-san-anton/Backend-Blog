import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import './config/passport.js';
import postRoutes from './routes/postsRouter.js';
import authRoutes from './routes/authRouter.js';

dotenv.config();

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session Middleware
app.use(session({
    secret: 'mi_super_secreto_unico',
    resave: false,
    saveUninitialized: false,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/posts', postRoutes);
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    const successMessage = req.session.successMessage;
    if (successMessage) {
        delete req.session.successMessage; // Borra el mensaje después de mostrarlo
        res.send(`<h1>Hola Mundo</h1><p>${successMessage}</p>`);
    } else {
        res.send('<h1>Hola Mundo</h1>');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
