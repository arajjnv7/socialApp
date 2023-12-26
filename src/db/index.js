import mongoose from "mongoose"     
import { DB_NAME } from "../constants.js"   
const connectDB = async () => {     
    try {     
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MOngoDB connected!! HOST: ${connectionInstance.connection.host}`)
    } catch (error) {       
        console.log(error)     
      }    
}

export default connectDB       