cd ../frontend && npm run build
cd ../
scp -i "./.school.pem" -r -vvv ./frontend/build/ ubuntu@44.201.225.74:/var/www/html/site/
scp -i "./.school.pem" -vvv ./server/index.js ubuntu@44.201.225.74:/var/www/html/site/server/
