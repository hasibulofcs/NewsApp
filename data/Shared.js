import {
  BookmarksIconBlack,
  BookmarksIconWhite,
  HomeIconBlack,
  HomeIconWhite,
  ProfileIconBlack,
  ProfileIconWhite,
  TrendingIconBlack,
  TrendingIconWhite,
} from "../assets/svgs/shared/Tabs";

export const BottomNavigationContent = [
  {
    activeUrl: "Home",
    icons: [HomeIconWhite, HomeIconBlack],
  },
  {
    activeUrl: "Trending",
    icons: [TrendingIconWhite, TrendingIconBlack],
  },
  {
    activeUrl: "Bookmarks",
    icons: [BookmarksIconWhite, BookmarksIconBlack],
  },
  {
    activeUrl: "Profile",
    icons: [ProfileIconWhite, ProfileIconBlack],
  },
];
