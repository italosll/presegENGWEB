import { FunctionComponent } from "react";

type Props = {
  src: string;
};

const ImageBanner: FunctionComponent<Props> = ({ src }) => {
  return <img src={src} />;
};

export default ImageBanner;
