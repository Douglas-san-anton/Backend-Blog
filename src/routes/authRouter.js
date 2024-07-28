import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

// Google Auth
router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleAuthCallback, authController.handleGoogleCallback);

// GitHub Auth
router.get('/github', authController.githubAuth);
router.get('/github/callback', authController.githubAuthCallback, (req, res) => {
    res.redirect('/');
});

// Logout
router.get('/logout', authController.logout);

export default router;
