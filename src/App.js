import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import CourseHome from "./components/allcourses/ServiceHome"
import LogRes from "./components/LoginRegistrasi/LogRes"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/Login' component={LogRes} />
          <Route exact path='/' component={() => (
            <>
              <Header />
              <Home />
            </>
          )} />
          <Route exact path='/provide' component={CourseHome} />
        </Switch>
      </Router>
    </>
  )
}

export default App