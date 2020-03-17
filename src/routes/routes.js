import { getDiningTimes } from '../controllers/diningController';

const routes = (app) => {
    app.route('/locations')
        .get(getDiningTimes);
}

export default routes;