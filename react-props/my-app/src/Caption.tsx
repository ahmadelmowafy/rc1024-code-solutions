type Props = {
  CaptionText: string;
};

export function Caption({ CaptionText }: Props) {
  return <h3>{CaptionText}</h3>;
}
