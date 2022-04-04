import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MainContents from "./components/MainContents";
import Main from "./components/Main";

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
