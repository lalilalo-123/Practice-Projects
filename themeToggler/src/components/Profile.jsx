import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="text-center mt-6 text-white text-xl">
      {!user ? <div>Please Login</div> : <div>Welcome, {user.username} 👋</div>}
    </div>
  );
};

export default Profile;
