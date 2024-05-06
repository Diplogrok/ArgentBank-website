import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { userProfile } from "../features/user/userSlice";
import Data from "../assets/data/UserPage.json";
import WelcomeMessage from "../components/WelcomeMessage";
import { Link } from "react-router-dom";

function UserPage() {
  const [clicked, setClicked] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);

    if (user.token && !user.profileData) {
      dispatch(userProfile());
    }
  };

  return (
    <>
      <main className="bg-customPurple pb-24">
        <div className="text-white p-6">
          <WelcomeMessage
            firstName={user.user?.firstName}
            lastName={user.user?.lastName}
          />
          <Link to="/EditUserInfo">
            {" "}
            {/* Utilisez Link pour naviguer vers EditUserInfo */}
            <Button
              className="text-xs py-2 px-4"
              onClick={handleButtonClick}
              options={{
                border2TopLeft: clicked,
                border2BottomRight: !clicked,
              }}>
              Edit Profile
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="sr-only">Accounts</h2>
          {Data.map((account) => (
            <UserCard
              key={account.id}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default UserPage;
