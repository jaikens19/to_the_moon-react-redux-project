const router = require('express').Router();
const chartsRouter = require('./charts.js')
const infoRouter = require('./info')
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');


router.use('/session', sessionRouter);
router.use("/charts", chartsRouter);
router.use('/users', usersRouter);
router.use('/info', infoRouter)




router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});




module.exports = router;