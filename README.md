# MongoDB Practice
<br/>
Setting up MongoDB on the PC and on cloud Instance. 
<br/>
<br/>
//What is MongoDB?
<br/>
MongoDB is a NoSQL database in which the data is stored in a form of <b>documents</b>, also called BSON (Binary Javascript Object Notation).
<br/>
MongoDB Compass and MongoDB Atlas.
<br/>
Learning what is connections, databases, collections and documents.
<br/>
Inserting documents, CRUD with mongoDB
<br/>
The tree goes like, we make a Database --> Connection --> Collection --> Documents
<br/>
SO we have three things. 
1. Our Backend Application
2. Database (MongoDB)
3. Mongoose
<br/>
<br/>
//What is Mongoose? ODM(Object Data Modeling)
<br/>
Mongoose is just a MongoDB library which acts as a middle layer between our backend Application and MongoDB, because we can't directly store our object based data to a document based MongoDb, and that's when mongoose helps us in doing that. (translation/interface)
<br/>
<br/>
//What is Schema?
<br/>
Schema is a blueprint or a template of the documents we are storing in a collection.
<br/>
<br/>
//What is Model?
<br/>
Model is a tool  which utilizes the Schema to interact with the DB. 
<br/>
<br/>
(Simple langauge mein model ko use karte huye hi hum mongoDB mein kuch create, read, update and delete kar sakte hain, entire CRUD operation is performed by the Model)
<br/>
<br/>
<br/>
<br/>
<b>How to Setup MongoDB?</b>
<br/>
1. npm i mongoose<br/>
2. import mongoose in the main file(app.mjs).<br/>
3. Make/copy the mongoDb function in the db.js file, from topcoder.com <br/>
4. Make the .env file to copy paste the database URL from mongoDB to your PC<br/>
5. Connect the MONGODB url which you store in the env to the function. <br/>
6. process.env.MONGODB_URL, store this is a variable. Import the dotenv in the db.js file<br/>
7. Export connectDB from the db.js<br/>
8. Import ConnectDB into the main file i.e, app.mjs.<br/>
9. Now call the ConnectDB() function in the app.mjs.<br/>
10. Add the body parser app.use(express.json()) above the ConnectDB function in the app.mjs<br/>
11. Now you have a backend application ready, and the mongoDB is connected too. but now you have to perform CRUD Operations and you can't do that without Schema. <br/>
12. Create a folder named "models" and create a file named userModel.js. and inside that file, you will make a schema. <br/>
13. Import Schema, Model from the Mongoose Library. <br/>
14. After making the Schema, make the variable "UserModel" to store the Schema. <br/>
15. Export UserModel.js.<br/>
16. Now you have to import the UserModel somewhere too, that would be the routes folder.<br/>
17. Create a "routes" folder and create the file "userRoutes.js" in it. <br/>
18. Import express and express.Router in the router file.<br/>
19. Import UserModel here because now you are going to perform CRUD Operation here.<br/>
20. Export router.<br/>
21. Import router file in the main file of app.mjs.<br/>
22. And then load it into the app.mjs, as app.use('/api', userRoutes).<br/>
23. ANd then write the CRUD Operations. of (read, create, update, delete)