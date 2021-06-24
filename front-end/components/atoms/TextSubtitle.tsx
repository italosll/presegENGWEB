import { FunctionComponent } from 'react';

type Props = {
  text: string;
};

const TextSubtitle: FunctionComponent<Props> = ({ text }) => (
  <p className="font-Sen font-bold text-xl text-left text-gray-700 ">
    {text}
  </p>
);

export default TextSubtitle;
