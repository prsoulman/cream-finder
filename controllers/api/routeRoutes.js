const router = require('express').Router();
const { Route } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newRoute = await Route.create({
      ...req.body,
      // route_id: req.session.user_id,
    });

    res.status(200).json(newRoute);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const routeData = await Route.destroy({
      where: {
        route_id: req.params.id,
        // route_id: req.session.user_id,
      },
    });

    if (!routeData) {
      res.status(404).json({ message: 'No route found with this id!' });
      return;
    }

    res.status(200).json(routeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
