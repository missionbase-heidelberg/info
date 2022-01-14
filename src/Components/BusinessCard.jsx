import ProfilePicture from "./ProfilePicture";
import Profile from "./Profile";
import Links from "./Links";

function BusinessCard() {
  return (
    <div className="full-back">
      <div className="business-card">
        <ProfilePicture />
        <Profile />
        <Links />
      </div>
    </div>
  );
}

export default BusinessCard;
