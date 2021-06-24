import { FunctionComponent } from 'react';

type Props = {
  src: string;
};

const ImageCategory: FunctionComponent<Props> = ({ src }) => <img className="w-full h-full rounded-lg" src={src} />;

export default ImageCategory;
