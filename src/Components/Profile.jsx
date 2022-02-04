function Profile() {
  const openlink = (link) => {
    window.open(link, "_blank");
  };

  const bibleVers =
    "Nur führt euer Leben würdig des Evangeliums von Christus, damit ich, ob ich komme und euch sehe oder abwesend bin, von euch höre, dass ihr fest steht in einem Geist und einmütig miteinander kämpft für den Glauben des Evangeliums -Phil. 1:27";

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
            alert("Video is in production - coming soon.");
          }}
        >
          <i class="button-icon fab fa-youtube"></i>Vision
        </button>
      </div>
      <div className="profile-description">
        <h3>
          Vision -{" "}
          <i
            onClick={() => {
              alert(bibleVers);
            }}
            class="clickable fas fa-bible"
          ></i>
        </h3>
        <p>
          Jeder Nachfolger Jesu ist ausgerüstet und mutig, seinen Glauben im
          Alltag zu teilen. Als Gottes Gemeinde stehen wir aktiv in Einheit
          zusammen, um seinen Missionsauftrag zu erfüllen.
        </p>
        <h3>Wer sind wir?</h3>
        <p>
          Wir sind eine Gruppe an alltäglichen Menschen, die sich danach sehnen,
          Jesus zu kennen und in Einheit und Liebe Gottes Reich zu bauen. Wir
          träumen davon, dass jeder Nachfolger Jesu ausgerüstet und freigesetzt
          ist, sein Umfeld für Jesus zu gewinnen.
        </p>
        <h3>Was machen wir?</h3>
        <p>
          Wir machen es für jeden Nachfolger Jesus möglich, sofort und praktisch
          in den Fähigkeiten trainiert zu werden, Menschen im Alltag zu Jesus zu
          führen. Das erreichen wir, indem wir eine Plattform für Gläubige und
          Gemeinden schaffen, über die wir auf regelmäßigen Straßeneinsätzen
          unsere Erfahrung und Hingabe teilen.
        </p>
        <h3>Outreaches</h3>
        <p>
          <div className="info">
            <span
              onClick={() => {
                openlink("https://goo.gl/maps/sm3duJDQ6PWvKcaB9");
              }}
            >
              <i class="info-icon fas fa-map-marker"></i>
              <span className="google-link">Bismarkplatz</span>
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
