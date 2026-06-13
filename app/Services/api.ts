const BASE_URL = "https://skillora-bi8e.onrender.com/api";

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await fetch(
    `${BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return await response.json();
};