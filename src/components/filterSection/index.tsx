import { useCallback, useEffect, useState } from "react";
import { api } from "../../api/axios";
import { Character } from "../../App";

interface ParamsProps {
  species: string;
  type: string;
  status: string;
  name: string;
}

interface FilterSectionProps {
  setCharacters: (characters: Character[]) => void;
  setPrevPage: (page: string | null) => void;
  setNextPage: (page: string | null) => void;
}

export function FilterSection({
  setCharacters,
  setNextPage,
  setPrevPage,
}: FilterSectionProps) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [queryParams, setQueryParams] = useState<string>("");

  const filterByParams = useCallback(async () => {
    if (searchInput) {
      const params: ParamsProps = {} as ParamsProps;
      params[queryParams as keyof ParamsProps] = searchInput;
      const characters = await api.get("/character", { params: params });
      setCharacters(characters.data.results);
      setPrevPage(characters.data.info.prev);
      setNextPage(characters.data.info.next);
    }
  }, [searchInput, queryParams]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      filterByParams();
    }, 500);

    return () => clearTimeout(timeout);
  }, [filterByParams, searchInput]);

  const handleParamsAndInput = (params: string, input: string) => {
    setQueryParams(params);
    setSearchInput(input);
  };

  return (
    <section className="flex flex-col lg:flex-row w-sizeClamp mx-auto gap-6 justify-between my-4 px-2">
      <input
        onChange={(event) => handleParamsAndInput("name", event.target.value)}
        type="text"
        placeholder="Filtre por nome"
        className="p-2 rounded-lg text-center placeholder:text-[#00000090]"
      />
      <select
        onChange={(event) =>
          handleParamsAndInput("species", event.target.value)
        }
        name="status"
        className="p-2 rounded-lg text-center">
        <option value="">Filter por uma espécie</option>
        <option value="human">Human</option>
        <option value="humanoid">Humanoid</option>
        <option value="alien">Alien</option>
        <option value="poopybutthole">Poopybutthole</option>
        <option value="mythological">Mythological</option>
        <option value="disease">Disease</option>
      </select>
      <input
        onChange={(event) => handleParamsAndInput("type", event.target.value)}
        type="text"
        placeholder="Filtre por tipo"
        className="p-2 rounded-lg text-center placeholder:text-[#00000090]"
      />

      <select
        onChange={(event) => handleParamsAndInput("status", event.target.value)}
        name="status"
        className="p-2 rounded-lg text-center">
        <option value="">Filter por um dos status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </section>
  );
}
