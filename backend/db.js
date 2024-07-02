import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const mongoURI = "mongodb://127.0.0.1:27017/codeSync";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;
