import express from "express";
/* const express = require('express'); */
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require("mongoose");
import cors = require("cors");

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app: app

    });

    app.use(cors());

    await mongoose.connect("mongodb://it2810:it281029@it2810-29.idi.ntnu.no:27017/it2810?authSource=it2810&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    console.log("Mongoose connected..")

    app.listen(4000, () => console.log("Server is running on port 4000"));
}
startServer();

export {}