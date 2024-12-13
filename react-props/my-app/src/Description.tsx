type Props = {
  DescriptionText: string;
};

export function Description({ DescriptionText }: Props) {
  return <p>{DescriptionText}</p>;
}
