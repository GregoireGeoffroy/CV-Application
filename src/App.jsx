import GeneralInfo from './components/GeneralInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>CV Builder</h1>
            <GeneralInfo />
            <Education />
            <Experience />
        </div>
    );
}

export default App;
