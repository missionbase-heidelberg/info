import contact_vcf from "../resources/JoshuaKraft.vcf";

function Links() {
  // const openlink = (link) => {
  //   window.open(link, "_blank");
  // };

  return (
    <div className="resource-links">
      <button className="btn animation resource-buttons">
        <a className="no-style" href={contact_vcf} download="Kontaktperson">
          <i class="button-icon fas fa-address-book"></i>
          Kontaktperson
        </a>
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
