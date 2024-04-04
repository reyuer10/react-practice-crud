import axios from "axios";

const USER_API = `http://localhost:3000/user`;
async function HandleFetchUserData() {
  try {
    const response = await axios.get(`${USER_API}/getUser`);
    return response.data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

async function HandleNewUserData(user_name, user_password) {
  try {
    const response = await axios.post(`${USER_API}/newUser`, {
      user_name: user_name,
      user_password: user_password,
    });
    return response.data;
  } catch (error) {
    console.log("Error adding new user", error);
  }
}

export { HandleFetchUserData, HandleNewUserData };
