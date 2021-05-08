MongoDB tricks is a NodeJS + Express + MongoDB data structure where almost all cases of MongoDB queries are described. It can serve as a shalabahter in your MongoDB development ;-). It is designed to put a route (for example, http://localhost:3000/api/comparison/getComparisonGte) in your browser to see the JSON data for each query. You must have the NodeJS installed and for the rest follow these instructions:      

# Installation
## Install project
git clone https://github.com/nbalog/mongoDB-tricks.git  
npm install express --save  
npm install mongoose --save  
npm install mongodb --save
## Install MongoDB 
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -  
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list  
sudo apt install mongodb-org 

# Run
sudo systemctl start mongod.service  
npm run start:server  

# Routes
## Comparison Operators
http://localhost:3000/api/comparison/getComparisonEq  
http://localhost:3000/api/comparison/getComparisonGt  
http://localhost:3000/api/comparison/getComparisonGte  

