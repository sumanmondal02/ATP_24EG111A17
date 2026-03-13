1. Generate package.json
        npm init -y
2. Create Express Server
        npm install express
3. Install mongoose and connect to MongoDB server
        REST API - MongoDB native driver ---> DB Server
        REST API - Mongoose ODM tool -----> DB Server
            npm install mongoose
4. Build User REST API
        Create User
        Read All User
        Read User by ID
        Update User by ID 
        Delete User by ID 
5. Create Schema and Model of the Resource (models)-(user)
6. Create user API and define routes
7. Install bcrpytjs to use for hashing 
                npm install bcryptjs
8. User Authentication
        - Submit Creedentials and get token only single token but real world applications use advanced tokens i.e, they have application and refresh token
        
        - install jsonwebtoken 
                - npm i jsonwebtoken
        - Public Routes (by anyone - example amazon viewing and searching about a project)
        - Protected Routes (by authenticated users - example buying/writing a review in amazon)

9. Cookie Parser
        npm i cookie-parser

10. dotenv
        npm i dotenv
                
## 200 - succesful for any action can be creation, updation, read, and deletion
## 201 - succesful Creation 
## 400 - bad request 
## 401 - Unauthorised 
## 404 - Not Found
## 500 - Server Side Error
