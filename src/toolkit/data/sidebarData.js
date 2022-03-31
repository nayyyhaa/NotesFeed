import { faTrashCan, faHome, faArchive, faTags } from "@fortawesome/free-solid-svg-icons";

export const sidebarData = [
  { id: 1, title: "Home", link: "/notesfeed", icon: faHome },
  { id: 2, title: "Labels", link: "/labelfeed", icon: faTags },
  { id: 3, title: "Archives", link: "/archivesfeed", icon: faArchive },
  { id: 4, title: "Trash", link: "/deletedfeed", icon: faTrashCan },
];
