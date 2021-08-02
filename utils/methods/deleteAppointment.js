export const deleteAppointment = async (id) => {
  try {
    const response = await fetch("/api/deleteAppointment", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseMessage = await response.json();
    return responseMessage;
  } catch (err) {
    const error = await err.json();
    const errorMessage = error.data;
    return errorMessage;
  }
};
