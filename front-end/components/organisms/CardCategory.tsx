import { FunctionComponent } from "react";
import ImageCategory from "../atoms/ImageCategory";
import TextLink from "../atoms/TextLink";
import TextParagraph from "../atoms/TextParagraph";
import TextTitle from "../atoms/TextTitle";

type Props = {
  imageSide: string;
  src: string;
  title: string;
  paragraph: string;
  linkPage: string;
};

const CardCategory: FunctionComponent<Props> = ({
  imageSide,
  src,
  title,
  paragraph,
  linkPage,
}) => {
  let rowAlign = imageSide === "left" ? "flex-row" : "flex-row-reverse";
  let cardBackgoundColor = imageSide === "left" ? "bg-white" : "bg-gray-100";

  return (
    <div
      className={`
      w-11/12 h-auto mx-auto flex flex-col my-4 rounded-xl bg-white  lg:${cardBackgoundColor} 
      md:w-9/12
      lg:${rowAlign} lg:h-96 lg:max-w-6xl lg:p-0
      `}
    >
      <div
        className="
         mx-auto p-4
         lg:w-1/2 lg:p-5 "
      >
        <ImageCategory src={src} />
      </div>
      <div
        className="
        h-auto   
        space-y-4 mt-3 p-5 pb-10
        lg:w-1/2 lg:h-full lg:m-0 lg:flex lg:flex-col lg:justify-around lg:space-y-8 lg:p-12"
      >
        <TextTitle text={title} />
        <TextParagraph text={paragraph} textAlign={"text-center"} />

        <div className="w-full flex flex-col ">
          <TextLink text={"Saiba Mais"} path={"jhhjv"} />
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
