import React, { useState } from "react";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import userData from "../assets/data/TonyStark.json";

function UserPage() {
  const [clicked, setClicked] = useState(false);
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
          <h1 className="font-bold text-3xl  pb-6">
            Welcome back
            <br />
            Tony Stark!
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
          {userData.map((account) => (
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
