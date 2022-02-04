import contact_vcf from "../resources/JoshuaKraft.vcf";
import vision_statement from "../resources/Mission Base - Vision Statement.pdf";
import strucutre from "../resources/Mission Base Struktur.pdf";

function Links() {
  // const openlink = (link) => {
  //   window.open(link, "_blank");
  // };

  return (
    <div className="resource-links">
      <a
        className="direct-download"
        href={contact_vcf}
        download="Kontaktperson"
      >
        <button className="btn animation resource-buttons">
          <i class="button-icon fas fa-address-book"></i>
          Kontaktperson
        </button>
      </a>
      <a
        className="direct-download"
        href={vision_statement}
        download="Vision-Statement"
      >
        <button className="btn animation resource-buttons">
          <i class="button-icon fas fa-bullseye"></i>
          Vision-Statement
        </button>
      </a>
      <a
        className="direct-download"
        href={strucutre}
        download="Interne Struktur"
      >
        <button className="btn animation resource-buttons">
          <i class="button-icon fas fa-project-diagram"></i>
          Interne Struktur
        </button>
      </a>
    </div>
  );
}

export default Links;
