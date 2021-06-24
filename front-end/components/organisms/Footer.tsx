import { FunctionComponent } from "react";
import SectionSocialMedia from "../molecules/SectionSocialMedia";
import SectionSubtitleParagraph from "../molecules/SectionSubtitleParagraph";

const Footer: FunctionComponent = ({}) => {
  return (
    <>
      <div
        className="
          h-auto w-auto bg-blue-100 py-10 mt-28 space-y-12 
          lg:flex lg:justify-around 
          "
      >
        <div
          className="
            
            h-auto w-auto max-w-6xl space-y-14
            lg:flex lg:px-5 lg:space-y-0 lg:space-x-4
            "
        >
          <SectionSocialMedia />

          <SectionSubtitleParagraph
            subtitle={"Se interessou?"}
            paragraph={
              "Entre em contato conosco, tire suas dúvidas e faça um " +
              "orçamento sem compromisso."
            }
          />

          <SectionSubtitleParagraph
            subtitle={"Endereço"}
            paragraph={
              "Rua alguma coisa nº34, Goiatuba-GO, atendemos também a região!"
            }
          />
        </div>
      </div>
      <div className="h-auto w-full bg-blue-500 flex justify-center py-2">
        <span className="font-Sen text-xs text-white  my-auto">
          {"Site desenvolvido por "}
        </span>
        <span className="font-Sen text-sm xl:text-base font-bold text-white pl-2 my-auto">
          {"Ítalo Moreira Silva"}
        </span>
      </div>
    </>
  );
};

export default Footer;
