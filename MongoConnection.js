const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const database='FirstMongoDb';
const client=new MongoClient(url);
async function getData()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('Friends');
    let response =await collection.find({}).toArray();//When we use toArray() that also return the promise thats why use await
    console.log(response);
}
getData();



//When we use async it dosen't wait for execution 
//now why client.connect will return promise because it will take time to connect with the client

