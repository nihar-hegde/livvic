"use server";

export const userData = async () => {
  try {
    const response = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
