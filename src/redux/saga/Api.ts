export const itemsData = async () => {
  try {
    const response = await fetch(
      "https://typescrip-redux-saga-database.herokuapp.com/items"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const companiesData = async () => {
  try {
    const response = await fetch(
      "https://typescrip-redux-saga-database.herokuapp.com/companies"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
