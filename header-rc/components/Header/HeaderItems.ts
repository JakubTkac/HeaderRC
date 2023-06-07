export interface IHeaderItems {
  id: number;
  title: string;
  dropdown?: IDropdown[];
}

export interface IDropdown {
  title: string;
  links: ILink[];
}

export interface ILink {
  title: string;
  path: string;
}

export const headerItems = [
  {
    id: 1,
    title: "lorem1",
    dropdown: [
      {
        title: "col1",
        links: [
          { title: "link1", path: "#" },
          { title: "link2", path: "#" },
          { title: "link3", path: "#" },
        ],
      },

      {
        title: "col2",
        links: [
          { title: "link4", path: "#" },
          { title: "link5", path: "#" },
          { title: "link6", path: "#" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "lorem2",
    dropdown: [
      {
        title: "col3",
        links: [
          { title: "link1", path: "#" },
          { title: "link2", path: "#" },
          { title: "link3", path: "#" },
        ],
      },

      {
        title: "col4",
        links: [
          { title: "link4", path: "#" },
          { title: "link5", path: "#" },
          { title: "link6", path: "#" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "lorem3",
  },
  {
    id: 4,
    title: "lorem4",
  },
];
