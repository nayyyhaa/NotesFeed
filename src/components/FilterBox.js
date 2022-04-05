import { useNote } from "contexts/NoteContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTag } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "contexts/FilterContext";

export const FilterBox = ({ setFilterOpen }) => {
  const [label, setLabel] = useState();
  const { labelList, setLabelList } = useNote();
  const { filter, dispatchFilter } = useFilter();
  const { sortBy, labelsSelected } = filter;
  const addLabelHandler = () => {
    if (label) setLabelList((prev) => [...prev, label]);
    setLabel("");
  };

  return (
    <div className="filter-box w-60p m-auto box-shd p-1">
      <div className="side-bar-title title row-flex p-v-2 p-h-3">
        <p>Filters</p>
        <p className="clear-all cursor" onClick={() => dispatchFilter({ type: "CLEAR_ALL" })}>
          Clear all
        </p>
        <button type="button" className="icon-btn rd-bdr red-text">
          <FontAwesomeIcon icon={faTimes} onClick={() => setFilterOpen(false)} />
        </button>
        <div className="line-decoration"></div>
      </div>
      <ul className="no-bullet col-flex flex-start no-wrap p-h-2 m-b-3">
        <li className="filter-list p-l-2 m-v-1">LABELS</li>
        {labelList?.map((label) => {
          return (
            <li key={label} className="filter-item p-l-2 m-v-05">
              <label className="categories sub-heading">
                <input
                  type="checkbox"
                  className="checkbox-input m-r-1"
                  checked={labelsSelected.includes(label)}
                  onChange={(e) =>
                    dispatchFilter({
                      type: "SET_LABELS",
                      payload: {
                        type: label,
                        isChecked: e.target.checked,
                      },
                    })
                  }
                />
                {label}
              </label>
            </li>
          );
        })}
        <li className="filter-item add-tag row-flex p-l-2 m-v-05">
          <label htmlFor="tag-selector" className="note-tagfield w-60p">
            <span className="cursor p-05">
              <FontAwesomeIcon className="tag-icon" icon={faTag} />
            </span>
            <input
              type="text"
              className="tag-selector w-60p p-05"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </label>
          <button className="btn primary-btn" onClick={addLabelHandler}>
            add
          </button>
        </li>
        <li className="line-decoration"></li>
        <li className="filter-list p-l-2 m-v-1">SORT BY</li>
        <li className="filter-item p-l-2 m-v-05">
          <label className="categories sub-heading">
            <input
              type="radio"
              className="radio-input m-r-1"
              title="date"
              checked={sortBy === "RECENTTOOLD"}
              onChange={() => dispatchFilter({ type: "SORT", payload: "RECENTTOOLD" })}
            />
            Date: Recent to old
          </label>
        </li>
        <li className="filter-item p-l-2 m-v-05">
          <label className="categories sub-heading">
            <input
              type="radio"
              className="radio-input m-r-1"
              title="date"
              checked={sortBy === "OLDTORECENT"}
              onChange={() => dispatchFilter({ type: "SORT", payload: "OLDTORECENT" })}
            />
            Date: Old to recent
          </label>
        </li>
      </ul>
    </div>
  );
};
