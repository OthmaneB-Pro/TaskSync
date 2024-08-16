type ParagraphType = {
  text: string;
};

export default function Paragraph({ text }: ParagraphType) {
  return <p>{text}</p>;
}
