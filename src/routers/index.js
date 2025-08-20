import { PATHS } from "@/constants";
import About from "@/pages/About";
import Home from "@/pages/Home";

const routes = [
  { path: PATHS.HOME, page: Home },
  {
    path: PATHS.ABOUT,
    page: About,
  },
  {
    path: PATHS.CONTACT,
    page: About,
  },
  {
    path: PATHS.SERVICE,
    page: About,
  },
];

export { routes };
