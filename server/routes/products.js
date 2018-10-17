const db = require('../../database/connection')

module.exports =  function(req, res, next) {
  db.query('SELECT * FROM product')
    .then(response => {
      const idAndName = response.rows.map(({product_id: productId, product_name: productName}) => {
        return { productId, productName}
      });

      return res.send(idAndName);
    })
    .catch(err => {
      console.log(err);
      res.send({ error: true, message: 'error grabbing products'});
    })
};