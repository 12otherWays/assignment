import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoticeBoard from "./components/NoticeBoard";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Sidebar />
        <NoticeBoard />
      </div>
    </>
  );
}

export default App;
