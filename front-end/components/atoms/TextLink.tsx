import { FunctionComponent } from 'react';

type Props = {
  text: string;
  path: string;
};

const TextLink: FunctionComponent<Props> = ({ text, path }) => (
  <a className="font-Sen font-normal text-xl text-center text-blue-500">
    {text}
  </a>
);

export default TextLink;
