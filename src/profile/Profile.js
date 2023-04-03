import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Profile(props) {
  Profile.defaultProps = {
    fullName: "amal",
    bio: "check the project and let as now your opinion",
    profession: "Developer",
  };
  const handleName = () => {
    alert(`Profile user name is ${props.fullName}`);
  };
  return (
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">
          <span className="card-subtitle mb-2 text-muted">FullName : </span>
          {props.fullName}
        </h4>
        <p class="card-text">
          <span className="card-subtitle mb-2 text-muted">Bio : </span>
          {props.bio}
        </p>
        <p className="card-title">
          <span className="card-subtitle mb-2 text-muted">Profession : </span>
          {props.profession}
        </p>
        <button className="btn btn-outline-dark" onClick={handleName}>
          handleName
        </button>
      </div>
    </div>
  );
}

export default Profile;
