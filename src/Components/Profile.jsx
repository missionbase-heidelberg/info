function Profile() {
  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="profile-back">
      <div className="profile-title">
        <h1>Mission Base</h1>
        <h3>Heidelberg</h3>
      </div>
      <div className="action-buttons">
        <button
          className="btn animation linkedin"
          onClick={() => {
            openlink("https://chat.whatsapp.com/Fz631sM72wLATVZMLi2ICj");
          }}
        >
          <i class="button-icon fab fa-whatsapp"></i>WhatsApp
        </button>
        <button
          className="btn animation contact"
          onClick={() => {
            alert("Coming soon.");
          }}
        >
          <i class="button-icon fab fa-youtube"></i>Vision
        </button>
      </div>
      <div className="profile-description">
        <h3>Wer sind wir?</h3>
        <p>
          Wir sind eine Gruppe an alltäglichen Menschen, die sich danach sehnen,
          Jesus zu kennen und gemeinsam Gottes Reich zu bauen. Wir haben das
          Herz Menschen das Evangelium zu erzählen und strategisch unser Umfeld
          für Jesus zu gewinnen.
        </p>
        <h3>Was machen wir?</h3>
        <p>
          Wir schaffen eine Platform, die jeder nutzen kann, um zu einem
          missionarischen Leben trainiert zu werden. Das bedeutet vor allem,
          dass wir regelmäßige Straßeneinsätze organisieren an denen wir unsere
          Erfahrung, Gottes Wort und Hingabe weitergeben.
        </p>
        <h3>Outreaches</h3>
        <p>
          <div className="info">
            <span
              onClick={() => {
                openlink("https://goo.gl/maps/YAgYdZBTT8GySFBF8");
              }}
            >
              <i class="info-icon fas fa-map-marker"></i>
              <span className="google-link">Google-Maps</span>
            </span>
            <span>
              <i class="info-icon fas fa-clock"></i>
              Jeden Montag, 18:30
            </span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Profile;
