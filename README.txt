To build and push files to production:
$ npm run deploy

This custom script will build the frontend application, transfer it to /var/www/html and transfer the package.json, 
packag-lock.json and server/index.js to the /var/www/html, and start the backend service
