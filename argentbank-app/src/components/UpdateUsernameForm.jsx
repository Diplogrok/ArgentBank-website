import React, { useState } from "react";
import Button from "./Button";

const UpdateUsernameForm = ({
  currentUsername,
  currentFirstName,
  currentLastName,
  onSubmit,
}) => {
  const [newUsername, setNewUsername] = useState(currentUsername || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUsername);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-4">
      <div className="flex items-center">
        <label
          htmlFor="newUsername"
          className="text-sm font-medium text-gray-700 w-24">
          User name:
        </label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="border rounded"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="currentFirstName"
          className="text-sm font-medium text-gray-700 w-24">
          First name:
        </label>
        <input
          type="text"
          id="currentFirstName"
          value={currentFirstName}
          className="border rounded"
          disabled
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="currentLastName"
          className="text-sm font-medium text-gray-700 w-24">
          Last name:
        </label>
        <input
          type="text"
          id="currentLastName"
          value={currentLastName}
          className="border rounded"
          disabled
        />
      </div>
      <div className="items-center space-x-4">
        <Button type="submit" className="rounded py-2 px-8">
          Update
        </Button>
        <Button type="" className="rounded py-2 px-8">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UpdateUsernameForm;
