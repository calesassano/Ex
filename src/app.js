import Counter from "./components/Counter";
import MyGitHub from "./components/MyGitHub";

function app() {
  return (
    <div className="app">
      <h1>
        Hello React!
      </h1>
      <h2>
        Cale Sassano - f28v571
      </h2>

      <hr />
      <Counter /><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;