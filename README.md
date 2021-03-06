NodeJS + Express + MongoDB data structure for MongoDB query operators. It is designed to put a route (for example, http://localhost:3000/api/comparison/getComparisonGte) in your browser to see the JSON data for each query. It is also an example of a ready to go backend that exports JSON data to the frontend. For writing to MongoDB from frontend form check this link https://github.com/nbalog/MEAN-form-example.  

# Installation
## Install project
``` git clone https://github.com/nbalog/mongoDB-tricks.git ```
## Install NodeJS
``` apt-get install nodejs ```   
Run ``` npm install" ``` inside this project folder to install all dependencies.

## Install MongoDB 
### Add key
``` curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - ``` 
### Write to sources.list.d
``` echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list ```
### Install MongoDB
``` sudo apt install mongodb-org ```

# Run
### Start MongoDB on localhost
``` sudo systemctl start mongod.service ```
### Run project  
``` npm run start:server ```  

# Routes
## Comparison Operators
http://localhost:3000/api/comparison/getComparisonEq  
http://localhost:3000/api/comparison/getComparisonGt  
http://localhost:3000/api/comparison/getComparisonGte  
http://localhost:3000/api/comparison/getComparisonLt  
http://localhost:3000/api/comparison/getComparisonLte  
http://localhost:3000/api/comparison/getComparisonIn  
http://localhost:3000/api/comparison/getComparisonNin  
http://localhost:3000/api/comparison/getComparisonNe

## Logical Operators
http://localhost:3000/api/logical/getLogicalAnd    
http://localhost:3000/api/logical/getLogicalOr    
http://localhost:3000/api/logical/getLogicalNor  
http://localhost:3000/api/logical/getLogicalNot  

## Element Operators
http://localhost:3000/api/element/getElementExists  
http://localhost:3000/api/element/getElementTypeOf  

## Evaluation Operators
http://localhost:3000/api/evaluation/getEvaluationJsonSchema  
http://localhost:3000/api/evaluation/getEvaluationMod  
http://localhost:3000/api/evaluation/getEvaluationRegex  
http://localhost:3000/api/evaluation/getEvaluationText  
http://localhost:3000/api/evaluation/getEvaluationWhere

## Array Operators
http://localhost:3000/api/array/getArrayAll  
http://localhost:3000/api/array/getArraySize  
http://localhost:3000/api/array/getArrayElemMatch  

## Comment Operator
http://localhost:3000/api/comment/getCommentComment  

