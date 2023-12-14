import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="p-6 bg-zinc-50 sticky top-0 border-b border-interface-100 shadow-sm flex items-center justify-between">
      {/* logo */}
      <h1 className="font-bold text-2xl">Meals Mania</h1>

      {/* navigation menu */}
      <Navigation />
    </header>
  );
};

export default Header;
