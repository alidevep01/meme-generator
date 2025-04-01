import trollFace from "../assets/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="troll-face-img" />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
