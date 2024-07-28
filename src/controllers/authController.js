import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/auth/login' });

export const githubAuth = passport.authenticate('github', { scope: ['user:email'] });

export const githubAuthCallback = passport.authenticate('github', { failureRedirect: '/' });

export const handleGoogleCallback = (req, res) => {
    req.session.successMessage = 'Has iniciado sesión correctamente';
    res.redirect('/');
};

export const logout = (req, res) => {
    req.logout();
    res.redirect('/');
};
