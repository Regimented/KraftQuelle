import { NavItem } from "../components/SideNav";

export const typescriptNavItems: NavItem[] = [
  {
    title: "Functions",
    path: "/functions",
    children: [
      {
        title: "Function Syntax",
        path: "function-syntax",
      },
      {
        title: "Arrow Functions",
        path: "arrow-functions",
      },
      {
        title: "Function Return Types",
        path: "function-return-types",
      },
    ],
  },
  {
    title: "Loops",
    path: "/loops",
    children: [
      {
        title: "For Loops",
        path: "for-loops",
      },
      {
        title: "While Loops",
        path: "while-loops",
      },
    ],
  },
];

export const PATHS = {
  TYPESCRIPT:
    "/programming-software-development/programming-languages/typescript",
};

export function getNavigationForSection(section: string): {
  navItems: NavItem[];
  basePath: string;
} {
  switch (section) {
    case "typescript":
      return {
        navItems: typescriptNavItems,
        basePath: PATHS.TYPESCRIPT,
      };

    default:
      return {
        navItems: [],
        basePath: "",
      };
  }
}
