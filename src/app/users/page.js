"use client";

import { addUser } from "@/redux/slices/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const userData = useSelector((state) => state.users.users);

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div>
      <h1>Add Users</h1>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch}>Add user</button>

      {userData &&
        userData.map((user) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>id: {user.id}</p>
          </div>
        ))}
    </div>
  );
};

export default Users;
