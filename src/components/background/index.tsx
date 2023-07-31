import rick_morty from "../../assets/rick_morty.jpg";

export function Background() {
  return (
    <div className="fixed z-[-1] fill-neutral-500 bg-slate-800 opacity-75">
      <img
        className="object-cover xl:object-fill w-[100vw] h-[100vh]"
        src={rick_morty}
        alt="rick_morty"
      />
    </div>
  );
}
