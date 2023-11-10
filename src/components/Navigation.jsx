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
  const pathname = "";

  return (
    <nav className="flex flex-row justify-center gap-8 mb-5">
      {Links.map((link) => {
        return (
          <a key={link.label} href={link.url}>
            <div
              className={`text-md hover:text-rose-400 ${
                link.url === pathname ? "text-rose-500" : "text-neutral-700"
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
