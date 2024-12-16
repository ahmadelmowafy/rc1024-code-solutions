type Props = {
  list: Pokemon[];
};

interface Pokemon {
  number: string;
  name: string;
}

export function PokemonList({ list }: Props) {
  const listItems = list.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
