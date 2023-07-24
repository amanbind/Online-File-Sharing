import mongoose from "mongoose";


const DBConnection = async() => {
        const MONGODB_URI = `mongodb+srv://user:amanbind@file-share.1hwfctq.mongodb.net/?retryWrites=true&w=majority`;
    try{
         await mongoose.connect(MONGODB_URI, { useNewUrlParser: true})
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;