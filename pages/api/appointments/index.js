import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const appointmentsCollection = db.collection("appointments");
    const response = await appointmentsCollection.find().toArray();
    client.close();

    const appointments = response.map((appointment) => ({
      firstName: appointment.firstName,
      lastName: appointment.lastName,
      contactNumber: appointment.contactNumber,
      time: appointment.time,
      date: appointment.date,
      id: appointment._id.toString(),
    }));

    return res.status(201).json({ appointments });
  }
};

export default handler;
