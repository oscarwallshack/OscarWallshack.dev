const Header = (props) => {
  return (
    <Header>
      <nav class="flex_container navbar_container">
        <div id="nav_brand">
          <a href="/" class="nav_link">
            OscarWallshack
          </a>
        </div>

        <ul class="nav_links_container" id="nav_links_container">
          <li>
            <a href="/" class="nav_link">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" class="nav_link">
              Projects
            </a>
          </li>
          <li>
            <a href="/about-me" class="nav_link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" class="nav_link">
              Contact
            </a>
          </li>
        </ul>

        <a href="javascript:void(0);" class="icon" onclick="responsive_nav()">
          <button class="hamburger" id="hamburger">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1.7em"
              width="1.7em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
        </a>
      </nav>
    </Header>
  );
};

export default Header;
