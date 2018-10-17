const router = require('express').Router();
const find = require('./find')
const products = require('./products')
const productsId = require('./products_id')
const users = require('./users')
const usersId = require('./users_id')

/* GET home page. */
router.use('/find', find);
router.use('/products', products);
router.use('/products/{id}', productsId);
router.use('/users', users);
router.use('/users/{id}', usersId);

module.exports = router;
