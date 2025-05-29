import { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "26-9-1996",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt={userData.name} />
      {isEdit ? (
        <>Helllo</>
      ) : (
        <>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
          <p>{userData.phone}</p>
          <p>{userData.address.line1}</p>
          <p>{userData.address.line2}</p>
        </>
      )}
      <div>Profile</div>
      <div>Profile</div>
    </div>
  );
};

export default Profile;
