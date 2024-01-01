import CommonSearchBar from "./components/common/search-bar/common-search-bar";
import RoundedButton from "./components/common/button/rounded-button";

export default function App() {
  return (
    <div className="App">
      <CommonSearchBar size={"large"} />
      <RoundedButton text={`Login`} />
    </div>
  );
}
