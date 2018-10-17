module.exports =  function(req, res, next, file) {

	
	async function uploadFile(bucketName, filename) {

		// Imports the Google Cloud client library
		const {Storage} = require('@google-cloud/storage');

		// Creates a client
		const storage = new Storage();

		// Uploads a local file to the bucket
		await storage.bucket(bucketName).upload(filename, {
		  // Support for HTTP requests made with `Accept-Encoding: gzip`
		  gzip: true,
		  metadata: {
		    // Enable long-lived HTTP caching headers
		    // Use only if the contents of the file will never change
		    // (If the contents will change, use cacheControl: 'no-cache')
		    cacheControl: 'public, max-age=31536000',
		  },
		});

		console.log(`${filename} uploaded to ${bucketName}.`);
	};

	/**
	 * TODO(developer): Uncomment the following lines before running the sample.
	 */
	const bucketName = 'plas-tique-images';
	const filename = 'gs://bucket-name-123/demo-image.jpg'; //file;
	uploadFile(bucketName, filename)

	// Imports the Google Cloud client library
	const vision = require('@google-cloud/vision');

	// Creates a client
	const client = new vision.ImageAnnotatorClient();

	var topresult;

	// Performs label detection on the image file
	client
	  .labelDetection('gs://' + bucketName + '/' + filename)
	  .then(results => {
	    const labels = results[0].labelAnnotations;

	    console.log('Labels:');
	    labels.forEach(label => console.log(label.description));
	    console.log(labels[0])
	    topresult = labels[0].description;
	    res.send(topresult);
	  })
	  .catch(err => {
	    console.error('ERROR:', err);
	    res.send('error');
	  });

    // res.send('topresult');
};
