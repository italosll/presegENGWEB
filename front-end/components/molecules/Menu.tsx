import TextLinkUppercase from "../atoms/TextLinkUppercase";

export default function Menu() {
  return (
    <div className="flex flex-col space-y-8 w-64 lg:w-auto lg:space-y-0 lg:flex-row lg:space-x-10">
      <TextLinkUppercase text={"Home"} path={"/"} />
      <TextLinkUppercase text={"Produtos"} path={"/"} />
      <TextLinkUppercase text={"Sobre nós"} path={"/"} />
    </div>
  );
}
