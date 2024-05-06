import React from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

function EditUserInfo() {
  const dispatch = useDispatch();

  const handleSubmit = (newUsername) => {
    dispatch(updateUserProfile({ userName: newUsername }));
  };

  return (
    <div>
      <h1 className="font-bold text-3xl pb-6">Edit user info</h1>
      <UpdateUsernameForm onSubmit={handleSubmit} />
    </div>
  );
}

export default EditUserInfo;
