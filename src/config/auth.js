export const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/auth/google'); // o '/auth/github' dependiendo de la estrategia de autenticación
    }
};
