import { useLocation } from "react-router-dom";

const Links = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

const Navigation = () => {
  const location = useLocation();
  let selectedPath = location.pathname;

  return (
    <nav className="flex flex-row justify-center gap-8 mb-5">
      {Links.map((link) => {
        return (
          <a key={link.label} href={link.url}>
            <div
              className={`text-md hover:text-rose-400 ${
                link.url === selectedPath
                  ? "text-rose-500 underline"
                  : "text-neutral-700"
              }`}
            >
              {link.label}
            </div>
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
