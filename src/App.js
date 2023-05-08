import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { HomePage } from "./pages/home";
import { Api } from "./components/Api";
import FavMovie from "./pages/favpage";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/Api" element={<Api />} />
          <Route to="/movie" element={FavMovie} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
