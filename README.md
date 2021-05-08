MongoDB tricks is a NodeJS + Express + MongoDB data structure where almost all cases of MongoDB queries are described. It can serve as a shalabahter in your MongoDB development ;-). It is designed to put a route (for example, http://localhost:3000/api/comparison/getComparisonGte) in your browser to see the JSON data for each query. You must have the NodeJS installed and for the rest follow these instructions:      

# Installation
## Install MongoDB 
### Add key
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -  
### Write to sources.list.d
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list  
### Install MongoDB
sudo apt install mongodb-org 
## Install project
git clone https://github.com/nbalog/mongoDB-tricks.git
### Install Express
npm install express --save
### Install Mongoose  
npm install mongoose --save
### Install MongoDB package   
npm install mongodb --save

# Run
sudo systemctl start mongod.service  
npm run start:server  

# Routes
## Comparison Operators
http://localhost:3000/api/comparison/getComparisonEq  
http://localhost:3000/api/comparison/getComparisonGt  
http://localhost:3000/api/comparison/getComparisonGte  

