import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { UserProfile } from "../features/user/userSlice";
import Data from "../assets/data/UserPage.json";

function UserPage() {
  const [clicked, setClicked] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    if (user.token) {
      dispatch(UserProfile());
    }
  }, [user.token, dispatch]);

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 100);
  };

  const firstName = user.user ? user.user.firstName : "";
  const lastName = user.user ? user.user.lastName : "";

  const personalMessage = `${firstName} ${lastName}!`;

  return (
    <>
      <main className="bg-customPurple pb-24">
        <div className="text-white p-6">
          <h1 className="font-bold text-3xl pb-6">
            {" "}
            Welcome Back <br />
            {personalMessage}
          </h1>
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
