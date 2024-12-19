import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#0d1224]/80 backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
              Anon Suphatphon
            </Link>
          </div>

          <ul
            className="flex flex-col items-start w-full h-screen mt-4 text-sm opacity-0 max-h-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default"
          >
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/#about"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  ABOUT
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/#experience"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  EXPERIENCE
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/#skills"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  SKILLS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/#education"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  EDUCATION
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/blog"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  BLOGS
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href="/#projects"
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  PROJECTS
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
