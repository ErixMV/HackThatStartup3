import mongoose from "mongoose";

export const createConnection = () => {
    const { DB_URI } = process.env;
    // const MONGO_URI = "mongodb://localhost/graphql";
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    };

    if (DB_URI)
        mongoose.connect(DB_URI, dbOptions);

    const connection = mongoose.connection;

    connection.once('open', () =>
        console.log("MongoDB connection stablished"));

    connection.on('error', err => {
        console.log(err);
        process.exit(0);
    });

    return connection;
}