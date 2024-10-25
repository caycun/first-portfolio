import "./App.css";
import SideBar from "./components/SideBar";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Project from "./components/Project";

function App() {
    return (
        <>
            <div className="container">
                <SideBar />

                <div className="main-container">
                    <div className="item">
                        <h2>About me</h2>
                        <p>
                            Hello! I am a self-taught programmer from the Philippines. I'm also a 9th grade student and I started learning programming and building simple projects at 8th grade. My main focus this year is to build more responsive websites
                            and enhance my knowledge and build a dev team in the future, I'm planning to learn Rust and  I use arch btw.  Have a great day!
                        </p>
                    </div>
                    <div className="item">
                        <h2>Tools</h2>
                        <div>
                            <Tools />
                        </div>
                    </div>
                    <div className="item">
                        <Card />
                    </div>
                </div>
                <h2>Projects</h2>
                <Project />
            </div>

            <Footer />
        </>
    );
}

export default App;
