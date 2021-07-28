export const sendAppointment = async (formData) => {
  try {
    const response = await fetch("/api/newAppointment", {
      method: "POST",
      body: JSON.stringify(formData),
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
