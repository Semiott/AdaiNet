import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chefs from './components/Chefs';
import Recipe from './components/Recipe';
import FoodWorld from './components/FoodWorld';
// import Styles from './styles.css'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar />
      </header>

        <main>
          <div>
            <section>
              <Link to="/chefs">
                <div className="main_right main1"></div>
              </Link>
            </section>
            <Link>
              <div className="foodexp"><h1>Food Experience</h1></div>
            </Link>
            <section>
              <div className="main_left main2"></div>
            </section>
          </div>
          <div className="pos_rel">
            <section>
              <div className="main_right main3"></div>
            </section>
            <div className="streamers">
              <div className="dreamers">
                For food streamers and dreamers :
                <br />
                The General food community
              </div>
            </div>
          </div>
            <section>
              <div className="main_left main4"></div>
            </section>
        </main>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/chefs" component={Chefs} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/foodworld" component={FoodWorld} />
        </Switch>
      <footer className="App-Footer">
        <Footer />
      </footer>
      </Router>
    </div>
  )
}
export default App