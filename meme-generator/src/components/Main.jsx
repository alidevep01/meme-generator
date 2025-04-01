import memeImage from "../assets/pngwing.png";

function Main() {
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>
        <label>
          Bottom Text
          <input type="text" name="bottomText" placeholder="Walk into Mordor" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeImage} alt="meme-image" />
        <span className="top">One does not simply</span>
        <span className="bottom">Walk into Mordor</span>
      </div>
    </main>
  );
}

export default Main;
