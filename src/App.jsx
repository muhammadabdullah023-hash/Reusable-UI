import { useState } from "react";
import Buttons from "./components/Buttons";
import ProfileCard from "./components/ProfileCard";
import TextInput from "./components/TextInput";
import DataGrid from "./components/DataGrid";
import myPhoto from "./assets/MyProfilePic.png";
import "./App.css";

function App() {
  const myName = "Muhammad Abdullah";
  const githubLink = "https://github.com/muhammadabdullah023-hash/Reusable-UI";

  const [theme, setTheme] = useState("blue");

  const [username, setUsername] = useState("");

  const [submittedName, setSubmittedName] = useState("");

  function handleKeyDown(event) {
    if (event.key === "Enter" && username.trim() !== "") {
      setSubmittedName(username.trim());
    }
  }

  return (
    <div className={`app ${theme}`}>

      {/* HEADER */}
      <header className="hero">
        <p className="eyebrow">REACT COMPONENT LIBRARY</p>

        <h1>
          Neon <span>UI</span>
        </h1>

        <p className="subtitle">
          Reusable. Interactive. Customizable.
        </p>
      </header>

      {/* COLOR CONTROLS */}
      <section className="section">
        <div className="section-title">
          <span className="number">01</span>

          <div>
            <h2>Choose your color</h2>
            <p>
              Click a color and watch the entire interface change.
            </p>
          </div>
        </div>

        <div className="color-buttons">

          <Buttons
            text="BLUE"
            color="blue"
            size="medium"
            active={theme === "blue"}
            onClick={() => setTheme("blue")}
          />

          <Buttons
            text="RED"
            color="red"
            size="medium"
            active={theme === "red"}
            onClick={() => setTheme("red")}
          />

          <Buttons
            text="GREEN"
            color="green"
            size="medium"
            active={theme === "green"}
            onClick={() => setTheme("green")}
          />

          <Buttons
            text="ORANGE"
            color="orange"
            size="medium"
            active={theme === "orange"}
            onClick={() => setTheme("orange")}
          />

        </div>

        <div className="current-theme">
          CURRENT THEME:
          <strong>{theme.toUpperCase()}</strong>
        </div>
      </section>

      {/* TEXT INPUT */}
      <section className="section">
        <div className="section-title">
          <span className="number">02</span>

          <div>
            <h2>Text Input</h2>
            <p>
              Type something and press Enter to see React update the interface.
            </p>
          </div>
        </div>

        <TextInput
          placeholder="Enter your name and press Enter..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          onKeyDown={handleKeyDown}
          size="large"
        />

        {submittedName && (
          <div className="hello-message">
            You have written: <span>{submittedName}</span> 👋
          </div>
        )}

        {/* Reusability demo: same TextInput, fixed color, independent of theme */}
        <div style={{ marginTop: "20px" }}>
          <TextInput
            placeholder="This input is always green, regardless of theme"
            size="small"
            color="green"
            value=""
            onChange={() => {}}
          />
        </div>
      </section>

      {/* PROFILE */}
      <section className="section">
        <div className="section-title">
          <span className="number">03</span>

          <div>
            <h2>Profile Card</h2>
            <p>
              The card automatically follows the selected color.
            </p>
          </div>
        </div>

        <ProfileCard
          name={myName}
          role="React Developer"
          image={myPhoto}
          github={githubLink}
          theme={theme}
        />

        {/* Reusability demo: same ProfileCard, different data */}
        <div style={{ marginTop: "30px" }}>
          <ProfileCard
            name="Ahram Tahir"
            role="UI/UX Designer"
            image="https://i.pravatar.cc/200?img=32"
            github="https://github.com/example"
            theme="orange"
          />
        </div>
      </section>

      {/* API DATA GRID */}
      <section className="section">
        <div className="section-title">
          <span className="number">04</span>

          <div>
            <h2>Fetching Live Data (API)</h2>
            <p>
              Pulls real user data from a public API and displays it in a grid,
              with a loading state while the request is in progress.
            </p>
          </div>
        </div>

        <DataGrid theme={theme} />
      </section>

      {/* FOOTER */}
      <footer>
        <span>BUILT WITH REACT</span>
        <span>•</span>
        <span>NEON UI</span>
      </footer>

    </div>
  );
}

export default App;
