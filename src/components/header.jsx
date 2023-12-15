import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-zinc-50 sticky top-0 border-b border-zinc-300 shadow-sm z-50">
      <div className="page-max-width p-6  flex items-center justify-between">
        {/* logo */}
        <h1 className="font-bold text-2xl">Meals Mania</h1>

        {/* navigation menu */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
