export const itemsData = async () => {
  try {
    const response = await fetch("http://localhost:8000/items");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const companiesData = async () => {
  try {
    const response = await fetch("http://localhost:8000/companies");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
