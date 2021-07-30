import { MongoClient } from "mongodb";

const handler = async (req, res) => {
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

  const groupByProperty = (array, property) =>
    array.reduce((acc, obj) => {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push({ time: obj.time });
      return acc;
    }, {});

  const dateArr = groupByProperty(appointments, "date");
  return res.status(200).json({ data: dateArr });
};

export default handler;
