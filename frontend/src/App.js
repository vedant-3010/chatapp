import { Route } from "react-router-dom";
import homePage from "./pages/homePage";
import chatPage from "./pages/chatPage";
import "./App.css"

function App() {
  return (
    <>
    <div className="App">
      <Route path={"/"} component = {homePage} exact/>
      <Route path={"/chats"} component = {chatPage} exact/>
    </div>
    </>
  );
}

export default App;
