import "../styles/Footer.css";

const socials = [
  { name: "A. Latham", link: "https://www.github.com/latham91" },
  { name: "A. Cookson", link: "https://www.github.com/andyc90" },
  { name: "A. Mills", link: "https://www.github.com/Andyyyy987" },
  { name: "L. Tanswell", link: "https://www.github.com/leotanswell" },
  { name: "O. Saka", link: "https://www.github.com/opsaka09" },
];

function Footer() {
  return (
    <footer>
      <span>© 2024 Swaps - Website by</span>
      <ul>
        {socials.map((social, index) => (
          <li key={index}>
            <a href={social.link} target="_blank" rel="noreferrer">
              {index === 4 ? `& ${social.name}.` : `${social.name},`}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
