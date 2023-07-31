import { useEffect, useState } from "react";
import { api } from "./api/axios";
import { Background } from "./components/background";
import { Header } from "./components/header";
import { CharacterTable } from "./components/table";
import { PageButtons } from "./components/pageButtons";
import { FilterSection } from "./components/filterSection";

export interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  id: number;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState<null | string>(null);
  const [prevPage, setPrevPage] = useState<null | string>(null);

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await api.get("/character");
      setCharacters(characters.data.results);
      setPrevPage(characters.data.info.prev);
      setNextPage(characters.data.info.next);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <Background />
      <Header />
      <section className="px-2">
        <div className="bg-[#00000040] w-fit mx-auto rounded-lg">
          <h2 className="font-roboto text-2xl 2xl:text-4xl my-8 p-2">
            Encontre todos os personagens do universo de Rick and Morty
          </h2>
        </div>
      </section>
      <main>
        <FilterSection
          setCharacters={setCharacters}
          setNextPage={setNextPage}
          setPrevPage={setPrevPage}
        />
        <section className="px-2 overflow-x-scroll lg:overflow-hidden mb-4">
          <CharacterTable characters={characters} />
          <PageButtons
            setCharacters={setCharacters}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
