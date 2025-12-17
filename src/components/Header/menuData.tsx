import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre Nós",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blogue",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Apoiar",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Páginas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Sobre a página",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Página de contatos",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Página da grade do blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Página da barra lateral do blog",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Página de detalhes do blog",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Página de login",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Página de inscrição",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Página de erro",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
