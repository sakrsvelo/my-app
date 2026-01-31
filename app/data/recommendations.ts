export type Recommendation = {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  synopsis: string;
  review: string;
  url: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "witch-hat-atelier",
    title: "witch hat atelier",
    author: "kamome shirahama",
    image: "/covers/wha.jpg",
    rating: 5,
    synopsis: "coco has always dreamed of being a magician but unfortunately, magicians are born, not made." 
    + " or so they think. after secretly seeing qifrey, a magician, cast a spell, she tries magic herself and "
    + " ends up turning her mother into stone. determined to fix her mistake, she embarks on a journey to reverse the spell. ",
    review: "the world building is very detailed and rich, slowly revealing dark plot points. the art is charming, the characters' "
    + "emotions are portrayed very well and overall a very whimsical read. i like how the struggles of the characters are portrayed, and how "
    + "no decison they make is black and white. if you like studio ghibli films, you may want to check this work out.",
    url: "https://kodansha.us/series/witch-hat-atelier/",
  },
  {
    id: "blue-period",
    title: "blue period",
    author: "tsubasa yamaguchi",
    image: "/covers/blueperiod.jpg",
    rating: 5,
    synopsis: "second-year high school student yatora yaguchi is bored with his normal life. he studies well and plays around with his friends, "
    + "but in truth, he doesn't enjoy either of those activities. bound by norms, he secretly envies those who do things differently.",
    review: "it's a very timely work. it talks a lot about the ups and downs of living, especially as a teen or young adult. every time i read "
    + "this work, i admittedly self-insert as the MC because of how relatable he is. the characters and situations seem like they would actually "
    + "happen irl. and given that it's an art focused manga, not only is the art amazing, it also showcases a lot of known and unknown artists alike, which helps their exposure.",
    url: "https://kodansha.us/series/blue-period/",
  },
  {
    id: "girl-meets-rock",
    title: "girl meets rock",
    author: "kuwahali",
    image: "/covers/girlmeetsrock.jpg",
    rating: 4,
    synopsis: "with a passion for richly textured japanese rock, first-year high school student chihiro hatono steps into the world of the light "
    + "music club, new guitar in tow. but what awaits her behind those doors...? a drama of unfiltered youth and musical ambition takes the stage!",
    review: "cute mc, works hard, tries her best has actual zero opps even her haters end up liking her she’s just that cool but in an endearing loser way",
    url: "https://mangaplus.shueisha.co.jp/titles/100291",
  },
  {
    id: "dungeon-meshi",
    title: "dungeon meshi",
    author: "ryoko kui",
    image: "/covers/dunmeshi.jpg",
    rating: 5,
    synopsis: "after the golden kingdom is sunk underground by an insane magician, its king emerges, promising all of his treasure to any who "
    + "defeat the magician, before crumbling to dust. guilds are spurred on by this promise, traversing the labyrinthine dungeon in search of "
    + "the magician. laios touden, the leader of one such guild, encounters a dragon that wipes out his party and devours his sister, falin.",
    review: "laios is a mood",
    url: "https://yenpress.com/titles/9780316471855-delicious-in-dungeon-vol-1",
    
  },
  {
    id: "hells-paradise",
    title: "hell's paradise",
    author: "yuji kaku",
    image: "/covers/jigokuraku.jpg",
    rating: 5,
    synopsis: "sentenced to death, ninja gabimaru the hollow finds himself apathetic. after leading a blood-soaked life, gabimaru believes he "
    + "deserves to die. however, every attempt to execute him inexplicably fails. finally, sagiri yamada asaemon, a fledgling member of a famed "
    + "executioner clan, is asked to take gabimaru's life; yet sagiri makes no move to kill him as requested.",
    review: "art is sooo peak i think it could've gone for like 30 more chapters but honestly it's peakk",
    url: "https://www.viz.com/shonenjump/chapters/hells-paradise-jigokuraku",
    
  },
  {
    id: "gachiakuta",
    title: "gachiakuta",
    author: "urana kei",
    image: "/covers/gachiakuta.jpg",
    rating: 5,
    synopsis: "the inhabitants of a certain wealthy town think nothing of throwing objects away. however, their waste is priceless to rudo, a "
    + "resident of the town's slums. despite the constant warnings from his adoptive father regto, rudo spends his days searching for reusable "
    + "materials that would otherwise be sent to the giant disposal area known as the pit.",
    review: "mc trash racoon and peak character designs!!",
    url: "https://kmanga.kodansha.com/title/10010/episode/325146",
    
  },
];
