import passport from 'passport';

export const googleAuth = passport.authenticate('google', { scope: ['profile'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

export const githubAuth = passport.authenticate('github', { scope: ['user:email'] });

export const githubAuthCallback = passport.authenticate('github', { failureRedirect: '/' });

export const logout = (req, res) => {
    req.logout();
    res.redirect('/');
};
