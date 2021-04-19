import { Route, Switch, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Frise from "./pages/Frise";
import Home from "./pages/Home";
import Langues from "./pages/Langues";
import Skills from "./pages/Skills";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  console.log(location);

  return (
    <div className="App">
      <h1 className='jesse'>Jesse PIazzini</h1>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home}/>
            <Route path="/langues" exact component={Langues} />
            <Route path="/experience" exact component={Frise}/>
            <Route path="/contact" exact component={Contact} />
            <Route path="/competences" exact component={Skills} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
