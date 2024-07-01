type PortfolioGames = {
  image: string;
  comingSoonStatus: boolean;
};

const PORTFOLIO_GAMES: PortfolioGames[] = [
  {
    comingSoonStatus: true,
    image: "/images/homepage/portfolio/portfolioGame1.png",
  },
  {
    comingSoonStatus: true,
    image: "/images/homepage/portfolio/portfolioGame2.png",
  },
  {
    comingSoonStatus: false,
    image: "/images/homepage/portfolio/portfolioLumoxGame.png",
  },
  {
    comingSoonStatus: true,
    image: "/images/homepage/portfolio/portfolioGame4.png",
  },
  {
    comingSoonStatus: true,
    image: "/images/homepage/portfolio/portfolioGame5.png",
  },
];

export default PORTFOLIO_GAMES;
