import TextSubtitle from "../atoms/TextSubtitle";
import {
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
export default function SectionSocialMedia() {
  return (
    <div className="h-auto px-5">
      <div className="w-36">
        <TextSubtitle text="Mídias Sociais" />
      </div>
      <div className="w-auto flex flex-row space-x-6 mt-2">
        <RiFacebookCircleFill className="w-7 h-auto text-blue-500" />
        <RiInstagramFill className="w-7 h-auto text-purple-500" />
        <RiWhatsappFill className="w-7 h-auto text-green-500" />
        <RiYoutubeFill className="w-7 h-auto text-red-500" />
      </div>
    </div>
  );
}
