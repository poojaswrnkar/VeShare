import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://vevaar:vevaar@ac-jtjffek-shard-00-00.lqa75t5.mongodb.net:27017,ac-jtjffek-shard-00-01.lqa75t5.mongodb.net:27017,ac-jtjffek-shard-00-02.lqa75t5.mongodb.net:27017/?ssl=true&replicaSet=atlas-q0pym0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;