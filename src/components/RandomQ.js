const RandomQ = () => {
  const quotes = [
    "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
    "It is impossible to manufacture or imitate love",
    "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
    "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
    "Every human life is worth the same, and worth saving.",
    "Have a biscuit, Potter.",
    "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
    "Socks are Dobby’s favorite, favorite clothes, sir!",
  ];

  const randomQuotes = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuotes];

  return (
    <div style={{ backgroundColor: "#242424", color: "white" }}>
      <span className="my-5">{quote}</span>
    </div>
  );
};

export default RandomQ;
