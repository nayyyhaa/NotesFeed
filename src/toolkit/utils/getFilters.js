export const getLabelSelected = (data, labelsSelected) =>
  labelsSelected.length > 0 && data.length > 0 ? data?.filter((it) => labelsSelected.includes(it.label)) : data;

export const sort = (data, sortBy) => {
  switch (sortBy) {
    case "OLDTORECENT":
      return [...data.sort((el1, el2) => +el1.createdOn - +el2.createdOn)];
    case "RECENTTOOLD":
      return [...data.sort((el2, el1) => +el1.createdOn - +el2.createdOn)];
    default:
      return data;
  }
};
