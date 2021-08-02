import { MongoClient, ObjectId } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();
      const appointmentsCollection = db.collection("appointments");
      const result = await appointmentsCollection.deleteOne({
        _id: ObjectId(data),
      });
      console.log(result, "deleted");
      client.close();
      return res.status(201).json({ message: "Appointment deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

export default handler;
