export const getLabelSelected = (data, labelsSelected) =>
  labelsSelected.length > 0 && data.length > 0 ? data?.filter((it) => labelsSelected.includes(it.label)) : data;

export const sort = (data, sortBy) => {
  switch (sortBy) {
    case "OLDTORECENT":
      return [...data.sort((el1, el2) => new Date(el1.createdOn).valueOf() - new Date(el2.createdOn).valueOf())];
    case "RECENTTOOLD":
      return [...data.sort((el2, el1) => new Date(el1.createdOn).valueOf() - new Date(el2.createdOn).valueOf())];
    default:
      return data;
  }
};
