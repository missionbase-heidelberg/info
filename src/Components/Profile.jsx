function Profile() {
  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="profile-back">
      <div className="profile-title">
        <h1>Joshua Kraft</h1>
        <h3>Machine Learning Engineer</h3>
      </div>
      <div className="action-buttons">
        <button
          className="btn animation linkedin"
          onClick={() => {
            openlink("https://www.linkedin.com/in/nathan-joshua-kraft/");
          }}
        >
          <i class="button-icon fab fa-linkedin"></i>LinkedIn
        </button>
        <button
          className="btn animation contact"
          onClick={() => {
            openlink(
              "https://heibox.uni-heidelberg.de/f/cf50f062fd954ff6b951/?dl=1"
            );
          }}
        >
          <i class="button-icon fas fa-address-book"></i>Save Contact
        </button>
      </div>
      <div className="profile-description">
        <div className="info">
          <span>
            <i class="info-icon fas fa-map-marker"></i>
            Heidelberg
          </span>
          <span>
            <i class="info-icon fas fa-envelope"></i>
            nathan.joshua.kraft@gmx.de
          </span>
        </div>

        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
        <h3>Intrests</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
