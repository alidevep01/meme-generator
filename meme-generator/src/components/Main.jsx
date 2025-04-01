import memeImage from "../assets/pngwing.png";
import { useState, useEffect } from "react";

function Main() {
  const [meme, setMeme] = useState({
    imageUrl: memeImage,
    topText: "One doesnt not simply",
    bottomText: "Walk into Mordor",
  });

  const [allMemes, setAllMemes] = useState([]);

  //useEffect
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  });

  //event handler for input box
  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //random image generator
  const randomImage = () => {
    if (allMemes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex];

    setMeme((prev) => ({
      ...prev,
      imageUrl: randomMeme.url,
    }));
  };
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            onChange={handleChange}
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
          />
        </label>
        <label>
          Bottom Text
          <input
            onChange={handleChange}
            value={meme.bottomText}
            type="text"
            name="bottomText"
            placeholder="Walk into Mordor"
          />
        </label>
        <button onClick={randomImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="meme-image" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;
