import Hero from "./components/hero.jsx";
import Demo from "./components/demo.jsx";
import "./app.css";

const App = () => {
    return (
        <>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </>
    );
};

export default App;