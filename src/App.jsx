import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/generalInfo.css";
import "./styles/education.css";
import "./styles/experience.css";
import './App.css';

export default function App() {
  return (
    <main>
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </main>
  );
}

