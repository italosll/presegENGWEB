import TextSubtitle from "../atoms/TextSubtitle";
import TextParagraph from "../atoms/TextParagraph";
import { FunctionComponent } from "react";

type Props = {
  subtitle: string;
  paragraph: string;
};

const SectionSubtitleParagraph: FunctionComponent<Props> = ({
  subtitle,
  paragraph,
}) => {
  return (
    <div
      className="
      h-auto px-5
      lg:my-auto
      "
    >
      <div className="w-36">
        <TextSubtitle text={subtitle} />
      </div>
      <div className="w-auto flex flex-row space-x-6 mt-2">
        <TextParagraph text={paragraph} />
      </div>
    </div>
  );
};

export default SectionSubtitleParagraph;
