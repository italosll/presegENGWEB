import { FunctionComponent } from 'react';

type Props = {
  text: string;
  path: string;
};

const TextLinkUppercase: FunctionComponent<Props> = ({ text, path }) => (
  <a className="font-Sen text-sm text-center text-gray-500">
    {text.toUpperCase()}
  </a>
);

export default TextLinkUppercase;
