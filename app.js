const cfSigned = require('aws-cloudfront-sign');
const moment = require('moment');
require('dotenv').config();

const getSignedUrl = (pageUrl) => {
	const options = { 
		keypairId: process.env.CF_ACCESS_KEY, 
		privateKeyPath: process.env.CF_PRIVATE_KEY, 
		expireTime: moment().add(process.env.CF_EXPIRY_TIME, process.env.CF_SECONDS)
	};
	return cfSigned.getSignedUrl(pageUrl, options);
};

const pageURL = process.env.CF_URL;

const signedUrl = getSignedUrl(pageURL);

console.log('Signed URL ', signedUrl);