import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./features/userSlice";
import { HandleNewUserData } from "./assets/services/userApi";

export default function App() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
    console.log("Loading: ", loading);
    console.log("Error: ", error);
    console.log(user);
  }, [dispatch]);

  const handleAddNewUser = async () => {
    try {
      await dispatch(HandleNewUserData({ userName, userPassword }));
      setUserName("");
      setUserPassword("");
    } catch (error) {
      console.log("Error adding new user!", error);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div>
        <input
          placeholder="Enter username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className=" px-4 py-2  rounded-full ring-1 ring-gray-300"
          type="text"
        />
        <input
          placeholder="Enter password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          className=" px-4 py-2  rounded-full ring-1 ring-gray-300"
          type="text"
        />
        <button
          onClick={handleAddNewUser}
          className="px-4 py-2 rounded-full bg-slate-600 font-semibold text-white "
        >
          Add
        </button>
      </div>
      <div>
        {user.map((user) => (
          <li className=" list-none" key={user.user_id}>
            {user.user_name}
          </li>
        ))}
      </div>
    </div>
  );
}
