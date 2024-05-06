import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { userProfile } from "../features/user/userSlice";
import Data from "../assets/data/UserPage.json";
import WelcomeMessage from "../components/WelcomeMessage";

function UserPage() {
  const [clicked, setClicked] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.token && !user.profileData) {
      dispatch(userProfile());
    }
  }, [user.token, user.profileData, dispatch]);

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  return (
    <>
      <main className="bg-customPurple pb-24">
        <div className="text-white p-6">
          <WelcomeMessage
            firstName={user.user?.firstName}
            lastName={user.user?.lastName}
          />
          <Button
            className="text-xs"
            onClick={handleButtonClick}
            options={{
              border2TopLeft: clicked,
              border2BottomRight: !clicked,
            }}>
            Edit Name
          </Button>
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
