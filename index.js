require("dotenv").config();
const express=require('express');
const {server}=require('./apolloServer/server')
const cors=require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const connect=require('./db/connect')
connect();
const port=4000


server.start().then(() => {
    server.applyMiddleware({ app });

    // Start the server
    app.listen({ port }, () =>
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    );
}).catch(error => {
    console.error("Error starting Apollo Server:", error);
});