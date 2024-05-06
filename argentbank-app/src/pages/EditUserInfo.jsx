import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import Data from "../assets/data/UserPage.json";
import UserCard from "../components/UserCard";

function EditUserInfo() {
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.user);

  const handleSubmit = (newUsername) => {
    dispatch(updateUserProfile({ ...profileData, userName: newUsername }));
  };

  return (
    <div>
      <div className="text-zinc-800">
        <h1 className="font-bold text-3xl pb-6 ">Edit user info</h1>
        {profileData && (
          <UpdateUsernameForm
            currentFirstName={profileData.firstName}
            currentLastName={profileData.lastName}
            onSubmit={handleSubmit}
          />
        )}
      </div>
      <div className="flex flex-col items-center text-white ">
        {Data.map((account) => (
          <UserCard
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
            className="bg-zinc-800 rounded items-center "
          />
        ))}
      </div>
    </div>
  );
}

export default EditUserInfo;
