const db = require('../../database/connection')

module.exports =  function(req, res, next) {
  console.log(req.params);
  
  db.query('SELECT * FROM product WHERE product_id = $1', [req.params.id])
    .then(response => {
      const [row] = response.rows
      const renamedKeys = {
        productName: row.product_name,
        pasticType: row.plastic_type, 
        weight: row.amount_of_plastic,
        lifeSpan: row.time_to_decay,
        recyclable: row.recyclable,
        alternativeProduct: row.alternative_product,
        recommendations: [row.recommendation_1, row.recommendation_2]
      }

      return res.send(renamedKeys);
    })
    .catch(err => {
      console.log(err);
      res.send({ error: true, message: 'error grabbing products'});
    })
};