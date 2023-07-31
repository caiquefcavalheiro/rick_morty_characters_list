import { Character } from "../../App";
import { Td } from "./td";
import { Th } from "./th";

interface TableProps {
  characters: Character[];
}

export function CharacterTable({ characters }: TableProps) {
  return (
    <>
      <table className="table-auto mx-auto border-collapse rounded-lg overflow-hidden w-sizeClamp space-x-2 border-neutral-600 border">
        <thead className="rounded-s-2xl">
          <tr className="bg-[#172039] text-white font-bold text-lg">
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Espécie</Th>
            <Th>Tipo</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody className="border-b border-neutral-500">
          {characters.map((character) => {
            return (
              <tr key={character.id} className="odd:bg-white even:bg-gray-300">
                <Td>{character.id}</Td>
                <Td>{character.name}</Td>
                <Td>{character.species}</Td>
                <Td>{character.type}</Td>
                <Td>{character.status}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
