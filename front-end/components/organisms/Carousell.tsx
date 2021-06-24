import Image from "next/image";
import ImageCarousell from "../atoms/ImageCarousell";

export default function Carousell() {
  return (
    <div className=" w-full h-auto lg:h-auto flex justify-center ">
      <div className="w-full h-full 2xl:p-4  max-w-screen-2xl">
        <ImageCarousell src={"/static/images/bannerHome[temporary].jpg"} />
      </div>
    </div>
  );
}
