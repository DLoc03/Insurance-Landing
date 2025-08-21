import { PATHS } from "@/constants";
import About from "@/pages/About";
import Advantage from "@/pages/Advantage";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Service from "@/pages/Service";
import ServiceDetail from "@/pages/Service/_id";

const routes = [
  { path: PATHS.HOME, page: Home },
  {
    path: PATHS.ABOUT,
    page: About,
  },
  {
    path: PATHS.SERVICE,
    page: Service,
  },
  {
    path: PATHS.SERVICE_SEARCH,
    page: ServiceDetail,
  },
  {
    path: PATHS.WHY_CHOOSE_US,
    page: Advantage,
  },
  {
    path: PATHS.CONTACT,
    page: Contact,
  },
];

export { routes };
