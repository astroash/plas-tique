module.exports =  function(req, res, next) {


	// Imports the Google Cloud client library
	const vision = require('@google-cloud/vision');

	// Creates a client
	const client = new vision.ImageAnnotatorClient();

	var topresult;

	// Performs label detection on the image file
	client
	  .labelDetection('gs://bucket-name-123/demo-image.jpg')
	  .then(results => {
	    const labels = results[0].labelAnnotations;

	    console.log('Labels:');
	    labels.forEach(label => console.log(label.description));
	    topresult = labels[0].description;
	  })
	  .catch(err => {
	    console.error('ERROR:', err);
	  });

    res.send(topresult);
};