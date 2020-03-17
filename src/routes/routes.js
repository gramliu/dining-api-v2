const routes = (app) => {
    app.route('/locations')
        .get((req, res) => {
            res.send(req);
        })
}

export default routes;