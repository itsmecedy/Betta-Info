const types = document.getElementById("bettaTypes");

let bettaTypesData = [
  {
    id: "crowntail",
    img: "./asssets/Betta_Crowntail.png",
    name: "Crowntail",
    desc: `Its spiky tail and fins give the crowntail Betta its royal look. The
  tail has a teardrop shape with webbing between the rays that's
  unmistakable to this breed.`,
  },
  {
    id: "Delta",
    img: "./asssets/Betta_Delta.png",
    name: "Delta/Super Delta",
    desc: `Delta and super delta bettas have tails with straight caudal edges—only theirs don’t reach 180 degrees like halfmoon bettas.`,
  },
  {
    id: "Doubletail",
    img: "./asssets/Betta_Doubletail.png",
    name: "Doubletail",
    desc: `As its name suggests, doubletail bettas have two distinct tails, each shaped like a half moon. This sets them apart from similar-looking bettas, which have only single, split tails.`,
  },
  {
    id: "HalfSunCombtail",
    img: "./asssets/Betta_HalfSunCombtail.png",
    name: "Half Sun/Combtail",
    desc: `IUsually bred by crossing a veiltail with a crowntail, the half sun (or combtail Betta) boasts a slightly less spiky tail than the crowntail.`,
  },
  {
    id: "Halfmoon",
    img: "./asssets/Betta_Halfmoon.png",
    name: "Halfmoon",
    desc: `One of the prettiest betta breeds, the halfmoon Betta has a 180-degree, fan-like tail that resembles a “D” when fully flared. This long-finned Betta also has unusual coloring.`,
  },
  {
    id: "Plakat",
    img: "./asssets/Betta_Plakat.png",
    name: "Plakat",
    desc: `The ancestors of all betta fish, plakat bettas have shorter tails with round or spade shapes. These strong, aggressive betta fish are less prone to injury and disease.`,
  },
  {
    id: "RosetailFeathertail",
    img: "./asssets/Betta_RoseTailFeatherTail.png",
    name: "Rosetail/Feathertail",
    desc: `A kind of halfmoon Betta, the rosetail (or feathertail Betta) also sports a fan-like tail, but has excessive branching and overlapping in its fin rays that resembles the ruffled appearance of a rose.`,
  },
  {
    id: "RoundTailFanTail",
    img: "./asssets/Betta_RoundTailFanTail.png",
    name: "Round Tail/Fan Tail",
    desc: `Sometimes mistaken for other bettas, the round tail (or fan tail Betta) has a single tail that's round and full.`,
  },
  {
    id: "Veiltail",
    img: "./asssets/Betta_Veiltail.png",
    name: "Veiltail",
    desc: `One of the most popular betta fish breeds, veiltail bettas are known for their long, spectacular fins and bright colors. New hobbyists usually start with veiltails due to their easygoing nature.`,
  },
];

let generateTypes = () => {
  return (types.innerHTML = bettaTypesData
    .map((betta) => {
      let { id, img, name, desc } = betta;
      return `
    <div id="${id}" class="rounded-xl md:p-2 p-5 text-center flex flex-col justify-center shadow hover:shadow-[#C63D41] hover:shadow-2xl hover:bg-red-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <img src="${img}" alt="Crowntail.png" />
      <p class="text-[#C63D41] font-semibold pb-1 pt-4">${name}</p>
      <p>
        ${desc}
      </p>
    </div>`;
    })
    .join(""));
};

generateTypes();
