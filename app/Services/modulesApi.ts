const BASE_URL = "https://skillora-bi8e.onrender.com/api";

export const getModules = async () => {
  const response = await fetch(
    `${BASE_URL}/modules/getAllModule`
  );

  return await response.json();
  
};

export const getModuleById = async (id: string) => {
  const response = await fetch(
    `${BASE_URL}/modules/getModuleById/${id}`
  );

  return await response.json();
};

export const getModuleWithLessons = async (
  moduleId: string
) => {
  const response = await fetch(
    `${BASE_URL}/modules/${moduleId}/getModuleWithLessons`
  );

  return await response.json();
};