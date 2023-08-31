import { InfoDetail, Phone, Section, TitleSection } from ".";
import Email from "./Email";

interface InfoPersoProps {
  client: {
    prenom: string;
    nom: string;
    borne: number;
    devis: null;
    etape: number;
    contact: {
      adresse: string;
      codePostal: number;
      tel: string;
      email: string;
    };
  };
}

const SectionInfoPerso = ({ client }: InfoPersoProps) => {
  return (
    <Section>
      <TitleSection title="Informations personnelles" />
      <InfoDetail label="Prénom" content={client.prenom} />
      <InfoDetail label="Nom" content={client.nom} />
      <InfoDetail label="Code Postal" content={client.contact.codePostal} />
      <InfoDetail label="Adresse" content={client.contact.adresse} />
      <Email email={client.contact.email} />
      <Phone phone={client.contact.tel} />
    </Section>
  );
};

export default SectionInfoPerso;
