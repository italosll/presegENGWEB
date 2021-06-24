import { FunctionComponent } from 'react';

type Props = {
  text: string;
};

const TextTitle: FunctionComponent<Props> = ({ text }) => (
  <p className="font-Sen font-bold text-4xl text-center text-gray-700 ">
    {text}
  </p>
);

export default TextTitle;
