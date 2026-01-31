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
    title: "girl meets rock!",
    author: "kuwahali",
    image: "/covers/girlmeetsrock.jpg",
    rating: 4,
    synopsis: "with a passion for richly textured japanese rock, first-year high school student chihiro hatono steps into the world of the light "
    + "music club, new guitar in tow. but what awaits her behind those doors...? a drama of unfiltered youth and musical ambition takes the stage!",
    review: "get your music recs here! if you like j-rock or anything pop punk adjacent, the music in this manga will definitely pique your "
    + "interest. the MC is very earnest, charming and sincere, making you want to root for her. there's nothing groundbreaking about it; it's very "
    + "much a casual read. in all honesty, the possibility of this having an anime adaptation is far off because of the numerous music rights of "
    + "licenses or idk... whatever is needed to use the music when it airs. which is unfortunate, but i'm still holding out hope.",
    url: "https://mangaplus.shueisha.co.jp/titles/100291",
  },
  {
    id: "dungeon-meshi",
    title: "dungeon meshi",
    author: "ryoko kui",
    image: "/covers/dunmeshi.jpg",
    rating: 5,
    synopsis: "after the golden kingdom is sunk underground by an insane magician, its king emerges, promising all of his treasure to any who "
    + "defeat the magician, before crumbling to dust. laios touden, the leader of one such guild, encounters a dragon that wipes out his party and devours his sister, falin.",
    review: "when i first read this, i thought it was very DND-esque, which already got me hooked. there's a good balance between comedy and serious themes as well. "
    + "the world building is actually incredibly complex and dense. the fact that there are intricate details on the ecosystem and biology of both the dungeon and the "
    + "monsters dwelling tells you that so much thought and love went into making this story. i would 100% erase my memory just to read it for the first time again.",
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
    review: "the art is breathtaking, especially page spreads of the island backgrounds. i for sure thought that it would get the same treatment as "
    + "jujutsu kaisen or chainsaw man because of its typical good vs. bad shounen trope, but it didn't garner the same popularity, which was a shame. "
    + "this work has a lot of dark themes, gorey art, and a lot of self-exploration for the characters. many consider the MC (big wife guy, we love to "
    + "see it) as a mary sue, but i think he's quite well developed and balanced. if you like action and thriller, this is definitely a must read.",
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
    review: "the plot is unique and refreshing, having your most valued item being your weapon? it would be cool to see more unconventional weapons"
    + " being used in fights. the art is very grunge and punk, which sort of reminds me of skull girls, guilty gear and soul eater. the MC is so likeable, "
    + "what with the way he's eager to help with his strong sense of justice. in a world full of people who disregard people or objects as if they were "
    + "nothing, he displays care and appreciation for both. the world building is interesting with the sphere and the ground, and the mystery shrouding the vital instruments.",
    url: "https://kmanga.kodansha.com/title/10010/episode/325146",
    
  },
];
