import { type } from 'node:os';
import { FunctionComponent } from 'react';

type Props = {
  text: string;
  textAlign?: string;
};

const TextParagraph: FunctionComponent<Props> = ({ text, textAlign }) => (
  <p className={`${textAlign} font-Sen font-normal text-lg text-gray-700`}>
    {text}
  </p>
);

export default TextParagraph;
