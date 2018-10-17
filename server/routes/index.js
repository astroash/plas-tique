const router = require('express').Router();
const find = require('./find')
const products = require('./products')
const productsId = require('./products_id')
const users = require('./users')
const usersId = require('./users_id')
/* GET home page. */
router.use('/api/find', find);
router.use('/api/products', products);
router.use('/api/products/{id}', productsId);
router.use('/api/users', users);
router.use('/api/users/{id}', usersId);

module.exports = router;
