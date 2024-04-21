import img2 from "./assets/my-image3.png";
import { useEffect,useState } from "react";
import resumePdf from './resume.pdf';


function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const textToType = "I am proficient in: \nReactJS\nMongoDb - Database\nNode Environment\nJavascript";
  const typingSpeed = 50; // Milliseconds per character

  useEffect(() => {
    if (charIndex < textToType.length) {
      const typingInterval = setInterval(() => {
        setTypedText((prevText) => prevText + textToType[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [charIndex, textToType]);

  const downloadResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <>
    <div className='bg-gradient-to-r from-cyan-400 to-blue-400'> 
      <nav className="fixed grid grid-cols-3 lg:grid-cols-6 gap-6 p-4 bg-gray-800 text-white w-full">
        <button onClick={() => scrollToSection("home")} className="hover:text-gray-300 focus:outline-none">Home</button>
        <button onClick={() => scrollToSection("about")} className="hover:text-gray-300 focus:outline-none">About Me</button>
        <button onClick={() => scrollToSection("projects")} className="hover:text-gray-300 focus:outline-none">Projects</button>
        <button onClick={() => scrollToSection("skills")} className="hover:text-gray-300 focus:outline-none">Skills</button>
        <button onClick={() => scrollToSection("education")} className="hover:text-gray-300 focus:outline-none">Education</button>
        <button onClick={downloadResume} className="hover:text-blue-800 hover:bg-sky-300 focus:outline-none bg-sky-500 rounded-lg px-2 py-4">Download Resume</button>

      </nav>

      <div id='home' className='pt-40 lg:pt-20'>
        <div className='flex justify-around p-10 space-x-4 flex-col md:flex-row'>
          <img className='size-96 rounded-3xl 
          bg-gradient-to-r from-blue-400 to-cyan-400
           border-2 border-gray-900 shadow-lg' src={img2} alt="Simar's image"/>
          <div className='bg-gray-200 py-10 px-5 rounded-lg shadow-lg my-10'>
            <h3 className='text-3xl my-5 text-blue-900'>Harsimarjit Singh</h3>
            <p>I am a Software Engineer with passion for problem solving with web development.</p>
            <pre className="text-md">{typedText}</pre>
          </div>
        </div>
      </div>

      <div id='about' className='bg-gray-100 py-8 px-4'>
        <div className='text-3xl m-4 text-blue-900 font-semibold'>About</div>
        <div className='p-4 flex flex-col space-y-4'>
          <div >
            I am a passionate Software Engineer. I love to solve problems using web development technologies. 
            I want to build professional websites that have great UI/UX.
          </div>

          <div>
            <p className='font-semibold'>LinkedIn:</p> 
            <a href="https://www.linkedin.com/in/harsimarjit-singh-676b37202/" target="_blank">https://www.linkedin.com/in/harsimarjit-singh-676b37202/</a>
            </div>
          <div>
            <p className='font-semibold'>Email:</p> simarbadding@gmail.com </div>
          <div>
            <p className='font-semibold'>City:</p> Toronto, ON </div>
          
          <div>
            I want to make features that solve everyday problems at scale. I feel I have the capability to breakdown a huge problem statement into small chunks, thereby enabling me to analyze and implement solutions easily.
            
          </div>
        </div>
      </div>

      <div id="projects" className='bg-sky-200 py-8 px-4 '>
        <div className='text-3xl m-4 text-blue-900 font-semibold'>Projects</div>
        <div className='p-4 flex flex-col space-y-4'>
          <div className='font-semibold text-lg'>Food Ordering Website</div>
          <ul>
            <li>Created a single page dynamic food ordering website, using which users can order their favorite dishes</li>
            <li>Search, filter using tags and many such user-friendly features have been added</li>
            <li>Used MEAN stack - MongoDB, Express, Angular, Node to implement both fronted and back-end API layer to perform CRUD - Create, Read, Update and Delete operations</li>
            <li>Implemented authentication and authorization using passport JWT tokens</li>
          </ul>
          <div className='font-semibold text-lg'>Unity3D Games</div>
          <ul>
            <li>Made multiple mobile games using Unity3D and uploaded 2 of them to Google Play Store</li>
            <li>Used Google Admob API to implement advertisement in one of the games</li>
            <li>Implemented shooting and platforming games targeted for PC both in 2D and 3D</li>
            <li>Accessible on Android Play Store: Cube Attack and .TicTacToe3D</li>
          </ul>
          <div  className='font-semibold text-lg'>JavaFX Application</div>
          <ul>
            <li>Used JavaFX linked to Oracle database to create a GUI for a grocery shop application</li>
            <li>Performed CRUD operations in this application</li>
          </ul>
        </div>
      
      </div>

      <div id="skills" className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 font-semibold">Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">HTML/CSS</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">React.js</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">Tailwind CSS</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">Node.js</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h3 className="text-lg font-semibold mb-2">MongoDB</h3>
            <div className="flex items-center">
              <div className="w-10 h-1 bg-blue-500 mr-2"></div>
              <div className="text-sm">Intermediate</div>
            </div>
          </div>
        </div>
      </div>

      <div id="education" className="pb-20">
       
      </div>
       <div id="education" className="bg-gray-100 p-8 mb-40 pb-20">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 font-semibold">Education</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-blue-800">Game Programming - Fast Track (Co-op) Advanced Diploma</h3>
          <p className="text-sm">Sept 2022 - Present</p>
          <p className="text-sm">Centennial College, Toronto, ON</p>
          <p className="text-sm">GPA: 4.2/4.5 (A)</p>
          <p className="text-sm">Courses: Java Programming, QA & Testing, Web Application Development, Software Systems Design, Algorithms & Data Structures, C++, Web Game Programming, Unity 3D</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800">Bachelors of Engineering (Computer Science Engineering)</h3>
          <p className="text-sm">Aug 2017 - Aug 2021</p>
          <p className="text-sm">Chitkara University, Rajpura, Punjab, India</p>
          <p className="text-sm">Courses: Client-Side Web Development, Java Programming, Algorithms & Data Structures, QA & Testing, Web Application Development, Software Systems Design, Database Concepts, Linux OS, Computer Networks</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
