const router = require('express'). Router();

router.get('/', (req, res) => {
    console.log('query string', req.query)
    res.status(200).json({router: 'users router', path: '/api/users'})
})

module.exports = router;