import { Sidebar } from "components";

export const NotesFeed = () => {
  return (
    <div className="notefeed-layout row-flex no-wrap flex-start">
      <Sidebar />
      <main className="notefeed-content p-h-5">
        <div className="notefeed-content-header row-flex p-2 m-t-3">
          <label class="field note-searchfield w-80p" for="search-text">
            <span class="search-icon cursor p-h-1">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input type="search" class="input search-nav reset-ip p-05" placeholder="Search here" id="search-text" />
          </label>
          <button className="btn primary-btn">Search</button>
          <i class="fa fa-sliders" aria-hidden="true"></i>
        </div>
        <section className="notefeed-section container card-grid grid-resp-col">
          <p>notes</p>
        </section>
      </main>
    </div>
  );
};
