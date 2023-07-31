import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";
import { Character } from "../../App";

interface PageButtonsProps {
  setPrevPage: (page: string | null) => void;
  setNextPage: (page: string | null) => void;
  setCharacters: (characters: Character[]) => void;
  prevPage: string | null;
  nextPage: string | null;
}

export function PageButtons({
  nextPage,
  prevPage,
  setCharacters,
  setNextPage,
  setPrevPage,
}: PageButtonsProps) {
  const handleNextPage = async () => {
    if (nextPage) {
      const characters = await axios.get(nextPage);
      setCharacters(characters.data.results);
      setPrevPage(characters.data.info.prev);
      setNextPage(characters.data.info.next);
    }
  };

  const handlePrevPage = async () => {
    if (prevPage) {
      const characters = await axios.get(prevPage);
      setCharacters(characters.data.results);
      setPrevPage(characters.data.info.prev);
      setNextPage(characters.data.info.next);
    }
  };

  return (
    <div className="max-w-[1200px] flex justify-center gap-16 mx-auto m-4">
      <div>
        <button
          onClick={handlePrevPage}
          disabled={!prevPage}
          className={`p-4 bg-slate-300 rounded-lg 
        ${!!prevPage && "hover:text-white hover:bg-slate-900"}
         disabled:cursor-not-allowed font-roboto font-semibold flex gap-2 items-center`}>
          <CaretLeft size={24} />
          Página Anterior
        </button>
      </div>
      <button
        onClick={handleNextPage}
        disabled={!nextPage}
        className={`p-4 bg-slate-300 rounded-lg 
      ${!!nextPage && "hover:text-white hover:bg-slate-900"}
       disabled:cursor-not-allowed font-roboto font-semibold flex gap-2 items-center`}>
        Próxima Página
        <CaretRight size={24} />
      </button>
    </div>
  );
}
