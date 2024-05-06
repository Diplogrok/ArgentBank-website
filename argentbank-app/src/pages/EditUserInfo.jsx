import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

function EditUserInfo() {
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.user);

  const handleSubmit = (newUsername) => {
    dispatch(updateUserProfile({ userName: newUsername }));
  };

  return (
    <div>
      <h1 className="font-bold text-3xl pb-6">Edit user info</h1>
      {profileData && (
        <UpdateUsernameForm
          currentFirstName={profileData.firstName}
          currentLastName={profileData.lastName}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default EditUserInfo;
