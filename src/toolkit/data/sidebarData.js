import { faTrashCan, faHome, faArchive, faTags } from "@fortawesome/free-solid-svg-icons";

export const sidebarData = [
  { _id: 1, title: "Home", link: "/notesfeed", icon: faHome },
  { _id: 2, title: "Labels", link: "/labelfeed", icon: faTags },
  { _id: 3, title: "Archives", link: "/archivesfeed", icon: faArchive },
  { _id: 4, title: "Trash", link: "/deletedfeed", icon: faTrashCan },
];
