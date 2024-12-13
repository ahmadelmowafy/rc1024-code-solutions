type Props = {
  ButtonText: string;
};

export function Button({ ButtonText }: Props) {
  return <button>{ButtonText}</button>;
}
