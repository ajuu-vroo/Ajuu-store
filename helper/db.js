import mongoose from 'mongoose';

const connection = {};

async function dbConnect(){
  if(connection.isConnected){
    return;
  };
  const DB = await mongoose.connect(process.env.mongodburl,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
  });
  connection.isConnected = DB.connections[0].readyState;

}
export default dbConnect;
