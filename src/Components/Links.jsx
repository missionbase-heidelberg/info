function Links() {
  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="profile-links">
      <i
        className="fab fa-github social-links"
        onClick={() => {
          openlink("https://github.com/OshFrosch");
        }}
      ></i>
      <i
        className="fab fa-linkedin social-links"
        onClick={() => {
          openlink("https://www.linkedin.com/in/nathan-joshua-kraft/");
        }}
      ></i>
      <i className="fab fa-instagram social-links"></i>
    </div>
  );
}

export default Links;
