import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      res.status(200).json(data);
      // const data = req.body;
      // const client = await MongoClient.connect(process.env.local.MONGODB_URI);
      // const db = client.db();
      // const appointmentsCollection = db.collection("Appointments");
      // const result = await appointmentsCollection.insertOne(data);
      // console.log(result);
      // client.close();
      // res.status(200).json({ message: "Successfully book an appointment" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
