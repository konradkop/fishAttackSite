import "./App.css";
import { fishAttack } from "fishattack";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";

function App() {
  const code = `import { fishAttack } from "fishattack";

function FishAttackButton() {
   <button onClick={fishAttack}>🐟 Release da fish 🐟</button>
}`;

  return (
    <div className="container">
      <h1>fishAttack</h1>
      <button onClick={fishAttack}>🐟 Release da fish 🐟</button>

      <div className="code-wrapper">
        <pre>
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                "npm install fishattack",
                Prism.languages.javascript,
                "javascript"
              ),
            }}
          />
        </pre>

        <pre>
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                code,
                Prism.languages.javascript,
                "javascript"
              ),
            }}
          />
        </pre>
      </div>

      <div className="links">
        <span>
          <a href="https://github.com/konradkop/fishAttack" target="_blank">
            GitHub
          </a>
        </span>
        <span>🦈🐋🐙</span>

        <span>
          <a href="https://konradkop.github.io/" target="_blank">
            konradkop
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
