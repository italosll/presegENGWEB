import React, { FunctionComponent } from 'react';

type Props = {
  src: string;
};

const CarousellImage: FunctionComponent<Props> = ({ src }) => <img className="w-full h-96 lg:h-full  2xl:rounded-xl" src={src} />;

export default CarousellImage;
