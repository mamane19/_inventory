import * as express from 'express';

export const register = (app: express.Application) => {
    const oidc = app.locals.oidc;

    // route for the default page
    app.get('/', (req: any, res) => {
        res.render('index');
    });

    // define a secure route handler for the login page that redirects to /guitars
    app.get('/login', oidc.ensureAuthenticated(), (req: any, res) => { 
        res.redirect('/guitars');
    });

    // a route to handle the logout action
    app.get('/logout', (req: any, res) => {
        req.logout();
        res.redirect('/');
    });

    // define a secure route handler for the guitar page
    app.get('/guitars', oidc.ensureAuthenticated(), (req: any, res) => {
        res.render('guitars');
    });
};