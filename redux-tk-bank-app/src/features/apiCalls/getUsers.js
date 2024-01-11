import axios from "axios";
/************************ async function to get all users **************************** */

export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const userList = [];
  const users = await axios.get(url);
  users?.data.map((e) => userList.push(e?.username));
  console.log(userList);
  return userList;
}
