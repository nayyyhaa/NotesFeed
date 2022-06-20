import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import { useState } from "react";
import noNote from "toolkit/assets/no-data.svg";
import { searchNote, sort, getLabelSelected } from "toolkit/utils";
import { Note } from "./Note";
import { FilterBox } from "./FilterBox";
import { useFilter } from "contexts/FilterContext";

export const AllNotesFeed = () => {
  const { notes } = useNote();
  const [searchInputText, setSearchInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const { setModalOpen } = useModal();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const { filter } = useFilter();
  const { sortBy, labelsSelected } = filter;
  const sortedData = sort(notes.allNotes, sortBy);
  const labeledData = getLabelSelected(sortedData, labelsSelected);
  const filteredNotes = searchNote(labeledData, searchText);
  return (
    <>
      <div className="notefeed-content-header row-flex p-v-2 m-t-3">
        <button className="btn primary-btn" onClick={() => setFilterOpen((prev) => !prev)}>
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </button>
        <label className="field note-searchfield" htmlFor="search-text">
          <span className="search-icon cursor p-h-1">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            className="input search-nav reset-ip p-05"
            placeholder="Search here"
            value={searchInputText}
            id="search-text"
            onChange={(e) => setSearchInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setSearchText(searchInputText)}
          />
        </label>
        <button className="btn primary-btn" onClick={() => setSearchText(searchInputText)}>
          Search
        </button>
      </div>
      {isFilterOpen && <FilterBox setFilterOpen={setFilterOpen} />}

      {searchText && <h2 className="h3 centered-text m-v-2">Showing results for "{searchText}"</h2>}
      {searchText && filteredNotes?.length < 1 && (
        <div className="grid-ctr m-v-5">
          <img className="w-30p no-note" src={noNote} alt="no note" />
          <p className="m-t-3">No note found for searched text!</p>
        </div>
      )}

      <section className="notefeed-section m-v-3">
        {filteredNotes?.length !== 0 && filteredNotes?.filter((note) => note.isPinned).length > 0 && (
          <>
            <h3 className="title centered-text">Pinned</h3>
            {filteredNotes
              ?.filter((note) => note.isPinned)
              .map((note) => (
                <Note key={note._id} note={note} />
              ))}
            <h3 className="title centered-text">Others</h3>
          </>
        )}

        {filteredNotes?.length !== 0 ? (
          filteredNotes?.filter((note) => !note.isPinned).map((note) => <Note key={note._id} note={note} />)
        ) : (
          <>
            {!searchText && (
              <div className="grid-ctr m-v-5">
                <img className="w-30p no-note" src={noNote} alt="no note" />
                <p className="m-t-3">No note found</p>
                <p>
                  <strong>
                    Start{" "}
                    <span className="colored-text cursor" onClick={() => setModalOpen(false)}>
                      Note-ing!
                    </span>
                  </strong>
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};
