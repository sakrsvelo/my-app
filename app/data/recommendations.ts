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
    synopsis: "coco, a humble dressmaker's daughter, has always been fascinated by magic and the witches who cast it, despite the strict precautions they take to hide their methods from the public. ",
    review: "peak fiction amazing showstopping never before seen magic harry potter wishes he could be here",
    url: "https://kodansha.us/series/witch-hat-atelier/",
  },
  {
    id: "blue-period",
    title: "blue period",
    author: "tsubasa yamaguchi",
    image: "/covers/blueperiod.jpg",
    rating: 5,
    synopsis: "second-year high school student yatora yaguchi is bored with his normal life. he studies well and plays around with his friends, but in truth, he does not enjoy either of those activities. bound by norms, he secretly envies those who do things differently.",
    review: "he’s just like me frfr",
    url: "https://kodansha.us/series/blue-period/",
  },
  {
    id: "girl-meets-rock",
    title: "girl meets rock",
    author: "kuwahali",
    image: "/covers/girlmeetsrock.jpg",
    rating: 4,
    synopsis: "with a passion for richly textured japanese rock, first-year high school student chihiro hatono steps into the world of the light music club, new guitar in tow. but what awaits her behind those doors...? a drama of unfiltered youth and musical ambition takes the stage!",
    review: "cute mc, works hard, tries her best has actual zero opps even her haters end up liking her she’s just that cool but in an endearing loser way",
    url: "https://mangaplus.shueisha.co.jp/titles/100291",
  },
  {
    id: "dungeon-meshi",
    title: "dungeon meshi",
    author: "ryoko kui",
    image: "/covers/dunmeshi.jpg",
    rating: 5,
    synopsis: "after the golden kingdom is sunk underground by an insane magician, its king emerges, promising all of his treasure to any who defeat the magician, before crumbling to dust. guilds are spurred on by this promise, traversing the labyrinthine dungeon in search of the magician. laios touden, the leader of one such guild, encounters a dragon that wipes out his party and devours his sister, falin.",
    review: "laios is a mood",
    url: "https://yenpress.com/titles/9780316471855-delicious-in-dungeon-vol-1",
    
  },
];
