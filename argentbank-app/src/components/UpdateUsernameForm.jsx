import React, { useState } from "react";

const UpdateUsernameForm = ({ currentUsername, onSubmit }) => {
  const [newUsername, setNewUsername] = useState(currentUsername || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUsername);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newUsername">User name:</label>
      <input
        type="text"
        id="newUsername"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUsernameForm;
