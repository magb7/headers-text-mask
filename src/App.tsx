import "./App.css";

function App() {
  return (
    <header>
      <div className="img" />
      <svg className="svg">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect id="alpha" x="0" y="0" width="100%" height="100%" />
            <text x="50%" y="50%" className="text">
              Forest
            </text>
          </mask>
        </defs>
        <rect id="base" x="0" y="0" width="100%" height="100%" />
      </svg>
    </header>
  );
}

export default App;
