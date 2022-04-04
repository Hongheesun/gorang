import "./App.css";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import MainContents from "./Component/MainContents";
import Main from "./Component/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main />
      {/* <Menu></Menu>
      <MainContents></MainContents> */}
    </div>
  );
}

export default App;
