import "./App.css";
import ironhacklogo from "./assets/ironhack-logo-xs.png";
import menuicon from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App" id="App">
      <section className="top">
        <main className="nav-bar">
          <img id="ironhacklogo" src={ironhacklogo} />
          <img id="menuicon" src={menuicon} />
        </main>
        <div className="hero">
          <div>
            <h1>
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn how to use <br /> the most popular frontend
              library,
              <br /> and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </div>
      </section>
      <div className="features">
        <div>
          <img src={icon1} />
          <h2>Declarative</h2>
          <p className="ps">
            React makes it
            <br /> painless to create
            <br /> interactive UI.
          </p>
        </div>
        <div>
          <img src={icon2} />
          <h2>Components</h2>
          <p className="ps">
            Build encapsulated
            <br /> components that
            <br /> manage their state.
          </p>
        </div>
        <div>
          <img src={icon3} />
          <h2>Single-Way</h2>
          <p className="ps">
            A set of immutable
            <br /> values are passed to
            <br /> the component's.
          </p>
        </div>
        <div>
          <img src={icon4} />
          <h2>JSX</h2>
          <p className="ps">
            Statially-typed,
            <br /> designed to run on
            <br /> modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
