import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const appointmentsCollection = db.collection("appointments");
    const result = await appointmentsCollection.insertOne(data);
    console.log(result);
    client.close();
    return res.status(201).json({ message: "Appointment created" });
  }
};

export default handler;
