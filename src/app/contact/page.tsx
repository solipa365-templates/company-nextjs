import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de contato | Modelo Next.js gratuito para COMPANYS e SaaS",
  description: "Esta é a página de contato do modelo COMPANYS Nextjs",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de contato"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
