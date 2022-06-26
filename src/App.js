import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}
