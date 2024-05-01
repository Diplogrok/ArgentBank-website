import React from "react";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import userData from "../assets/data/TonyStark.json";

function UserPage() {
  return (
    <>
      <main className=" bg-violet-950 flex flex-col items-center justify-center">
        <div className=" text-white text-center">
          <h1 className=" font-bold text-1xl md:text-2xl lg:text-3xl">
            Welcome back
            <br />
            Tony Stark!
          </h1>
          <Button>Edit Name</Button>
        </div>
        <div>
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
