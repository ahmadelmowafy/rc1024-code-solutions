type Props = {
  HeaderText: string;
};

export function Header({ HeaderText }: Props) {
  return <h1>{HeaderText}</h1>;
}
