import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <header className="mt-5 px-3 md:px-0 container mx-auto mb-16 md:mb-24">
      {/* navbar starts */}
      <nav className="mb-6 md:mb-12">
        <div className="navbar ">
          <div className="navbar-start">
            <a className=" font-bold text-2xl md:text-3xl text-color-15">
              Recipe Calories
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-color-15-70 ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="relative text-color-15-70">
              <i className="fa-solid fa-magnifying-glass absolute left-4  top-1/2 transform -translate-y-1/2"></i>
              <input
                type="text"
                placeholder="Type here"
                className="input bg-color-15-5 rounded-[50px] w-full max-w-xs pl-9 pb-1 placeholder:text-color-15-70 focus:outline-green-500 focus:border-green-500 "
              />
            </div>

            <div className="bg-color-ob rounded-full text-color-15 p-2">
              <i className="fa-regular fa-user rounded-full border-[1.5px]  border-color-15 p-1"></i>
            </div>
          </div>
        </div>
      </nav>
      {/* Heroi section starts */}
      <Banner></Banner>
    </header>
  );
};

export default Header;
