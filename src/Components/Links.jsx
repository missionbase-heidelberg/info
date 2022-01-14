function Links() {
  // const openlink = (link) => {
  //   window.open(link, "_blank");
  // };

  return (
    <div className="resource-links">
      <button className="btn animation resource-buttons">
        <i class="button-icon fas fa-address-book"></i>
        Kontaktperson
      </button>
      <button className="btn animation resource-buttons">
        <i class="button-icon fas fa-bullseye"></i>
        Vision-Statement
      </button>
      <button className="btn animation resource-buttons">
        <i class="button-icon fas fa-project-diagram"></i>
        Interne Struktur
      </button>
    </div>
  );
}

export default Links;
