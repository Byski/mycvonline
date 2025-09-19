// Enhanced Skills section with animated network-like lines and names
import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const resumePDF = "/assets/RESUME INTERNSHIP(4).pdf";
const profilePic = "/assets/profile.jpg";
const alarmsetup = "/assets/alarmsetup.png";
const alarmsetup1 = "/assets/alarmsetup1.png";
const alarmsetup2 = "/assets/alarmsetup2.png";
const alarmsetup3 = "/assets/alarmsetup3.png";
const logo = "/assets/logo.png";
const gold = "/assets/gold.png";
const tlight = "/assets/tlight.jpg";
const tlight2 = "/assets/tlight2.jpg";
const htmlLogo = "/assets/html.png";
const cssLogo = "/assets/css.png";
const jsLogo = "/assets/js.png";
const reactLogo = "/assets/react.png";
const cppLogo = "/assets/cpp.png";
const mql5Logo = "/assets/mql5.png";
const algoumlLogo = "/assets/algouml.png";
const javaLogo = "/assets/java.png";
const pythonLogo = "/assets/python.png";
const matlabLogo = "/assets/matlab.png";
const proteusLogo = "/assets/proteus.png";
const linuxLogo = "/assets/linux.png";
const schematicLogo = "/assets/schematic.png";
const firebaseLogo = "/assets/firebase.png";
const githubLogo = "/assets/github.png";
const kubernetesLogo = "/assets/kubernetes.png";
const sshLogo = "/assets/ssh.png";
const carRental = "/assets/car-rental.png";
const indicesEA = "/assets/indices-ea.png";
const indicesEA1 = "/assets/indices-ea1.png";
const indicesEA2 = "/assets/indices-ea2.png";
const indicesEA3 = "/assets/indices-ea3.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "C++", logo: cppLogo },
  { name: "MQL5", logo: mql5Logo },
  { name: "AlgoUML", logo: algoumlLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "MATLAB", logo: matlabLogo },
  { name: "Proteus", logo: proteusLogo },
  { name: "Linux", logo: linuxLogo },
  { name: "Schematic Design", logo: schematicLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Kubernetes", logo: kubernetesLogo },
  { name: "SSH", logo: sshLogo },
];

const projects = [
{
  id: "indices-ea",
  title: "Spx500 BoxDoji Expert Advisor",
  description: "Advanced MT5 Expert Advisor for Spx500 trading using box breakout and doji patterns.",
  image: indicesEA,
  images: [indicesEA, indicesEA1, indicesEA2, indicesEA3],
  githubUrl: "https://github.com/Byski/indices-expert-advisor",
  details: (
    <>
      {/* Notice Banner */}
      <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 p-4 rounded-lg border border-[#FF6B6B]/20 mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xl">⚠️</span>
          <p className="text-[#FF6B6B] font-medium">
            This EA is provided for educational and personal use only.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Strategy Overview</h3>
      <p className="mb-6">
        SPX500_BoxDoji_EA is a sophisticated MetaTrader 5 Expert Advisor designed for precision scalping 
        and short-term intraday trading on Gold (XAUUSD) using the 5-minute timeframe.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-500/10">
          <h4 className="text-lg font-semibold text-[#00BFA6] mb-4 flex items-center">
            <span className="text-xl mr-2">📊</span> Box Breakout Strategy
          </h4>
          <p className="text-gray-300">
            The EA detects a consolidation range formed by 4 tightly ranged candles and places trades upon breakout. 
            This method captures strong impulsive moves after periods of low volatility, with configurable 
            MaxBoxRangePoints to avoid false signals.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-500/10">
          <h4 className="text-lg font-semibold text-[#00BFA6] mb-4 flex items-center">
            <span className="text-xl mr-2">🎯</span> Exhaustion Doji Reversal
          </h4>
          <p className="text-gray-300">
            Identifies large-range candles followed by a doji candle, suggesting potential momentum exhaustion. 
            Places reversal trades with precise stop placement at the doji's high/low.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Risk Management Features</h3>
      <div className="bg-[#1e293b]/50 p-6 rounded-xl mb-8 border border-teal-500/10">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-[#00BFA6] mr-2">•</span>
            <span>Predefined Take Profit and Stop Loss levels for consistent risk management</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#00BFA6] mr-2">•</span>
            <span>Adjustable trailing stop loss (TrailingStopPoints) to secure profits during favorable moves</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#00BFA6] mr-2">•</span>
            <span>MaxTradesPerDay parameter to control daily exposure and risk</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Technical Implementation</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-500/10">
          <h4 className="text-lg font-semibold text-[#00BFA6] mb-4">Core Features</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>5-minute timeframe optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>Pattern recognition algorithms</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>Dynamic position sizing</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl border border-teal-500/10">
          <h4 className="text-lg font-semibold text-[#00BFA6] mb-4">Testing & Validation</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>Live market testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>Spread & slippage optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#00BFA6] mr-2">•</span>
              <span>High-impact news handling</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-teal-500/10">
        <h4 className="text-lg font-semibold text-[#00BFA6] mb-4 flex items-center">
          <span className="text-xl mr-2">🔒</span> Source Code & Testing Notice
        </h4>
        <p className="text-gray-300">
          The source code is currently private during live testing to ensure reliability and robustness 
          in real market conditions. This includes testing during high-impact sessions like New York Open 
          and CPI releases. MetaTrader 5 backtest reports are available to demonstrate historical performance.
          Although if requested by a recruiter, I can privately share the source code.
        </p>
      </div>
    </>
  )
},

{
  id: "alarm",
  title: "Home Alarm System",
  description: "Smart multi-zone security system using Arduino and Processing.",
  image: alarmsetup,
  images: [alarmsetup, alarmsetup1, alarmsetup2, alarmsetup3],
  githubUrl: "https://github.com/Byski/HouseAlarm.git",
  details: (
  <>
    <h3 className="text-xl font-semibold text-teal-300 mb-2">Project Overview:</h3>
    <p className="mb-4">
      Designed and built a multi-zone smart home alarm system using Arduino for embedded control and Processing for real-time graphical monitoring. The system features Entry, Exit, Panic, and Night zones, each with custom response behavior.
    </p>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Key Features:</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Integrated ultrasonic, IR motion, temperature (MLX90614), sound, and tamper sensors for multi-layered detection.</li>
      <li>Used a 4×4 keypad for secure PIN-based access and alarm control (entry, exit, and emergency codes).</li>
      <li>Real-time alerts displayed on an LCD screen and triggered through zone-specific buzzers.</li>
      <li>Night zone mode with enhanced monitoring using sound and temperature thresholds.</li>
    </ul>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Graphical Interface:</h3>
    <p className="mb-4">
      Created a Processing-based GUI that displays house layout, highlighting active zones using flashing visual cues. Serial communication with Arduino ensures synchronized updates for intrusions, panic mode, or zone activity.
    </p>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Skills Demonstrated:</h3>
    <ul className="list-disc list-inside">
      <li>Arduino (C++) and sensor integration</li>
      <li>Secure access control systems</li>
      <li>Serial communication and real-time monitoring</li>
      <li>GUI development with Processing</li>
    </ul>
  </>
)
},

{
  id: "car-rental",
  title: "Car Rental System",
  description: "Java-based desktop application for car rental service management.",
  image: carRental,
  githubUrl: "https://github.com/Byski/car-rental-system.git",
  details: (
    <>
      <h3 className="text-xl font-semibold text-teal-300 mb-4">Project Overview</h3>
      <p className="mb-6">
        This is a Java-based desktop application that simulates a car rental service. The application allows users to
        select car models, calculate rental costs, and manage additional services through an intuitive graphical interface.
      </p>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Core Features</h3>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Select a car model from a dropdown list</li>
        <li>Input the number of rental days</li>
        <li>Provide driver age for age-based discounts</li>
        <li>Choose additional options:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Chauffeur service (+$50/day)</li>
            <li>Late return fee (+$100 fixed)</li>
            <li>Daily fuel surcharge (+$5/day)</li>
          </ul>
        </li>
        <li>Calculate total cost based on selected options</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Technical Implementation</h3>
      <div className="mb-6">
        <h4 className="text-lg font-medium text-[#00BFA6] mb-2">User Interface</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Built using Java Swing components</li>
          <li>Responsive layout with GridBagLayout</li>
          <li>Real-time user feedback and validation</li>
          <li>Custom styling and font management</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-[#00BFA6] mb-2">Key Features</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Age-based cost adjustments (discounts for drivers over 30)</li>
          <li>Transmission selection dialog (Manual/Automatic)</li>
          <li>Input validation with alert dialogs</li>
          <li>Dynamic pricing calculations</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Technologies Used</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h4 className="font-medium text-[#00BFA6] mb-2">Core Technology</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Java SE</li>
            <li>Object-Oriented Programming</li>
            <li>Inheritance & Encapsulation</li>
          </ul>
        </div>
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <h4 className="font-medium text-[#00BFA6] mb-2">UI Components</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Java Swing</li>
            <li>AWT</li>
            <li>JFrame & JPanel</li>
            <li>Custom UI Controls</li>
          </ul>
        </div>
      </div>
    </>
  )
},

{
  id: "traffic",
  title: "Traffic Light",
  description: "Traffic Light built with Arduino.",
  image: tlight,
  images: [tlight, tlight2],
  githubUrl: "https://github.com/Byski/trafficlight.git",
  details: (
  <>
    <h3 className="text-xl font-semibold text-teal-300 mb-2">Project Overview:</h3>
    <p className="mb-4">
      Designed and implemented an embedded traffic light system simulating real-world traffic and pedestrian interactions. 
      This microcontroller-based project used an Arduino and various peripheral components to coordinate a realistic traffic signal 
      and pedestrian crossing experience.
    </p>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Key Contributions:</h3>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Circuit Design & Assembly:</strong> Soldered and connected discrete electronic components (resistors, photoresistor, LEDs, buzzer, and button) onto a custom PCB labeled "Y1 Misc Shield Rev1", ensuring proper pin alignment and circuit continuity.</li>
      <li><strong>Firmware Development:</strong> Wrote and deployed Arduino code that controlled LED-based traffic lights, pedestrian signaling, audio alerts, and LCD display updates.</li>
    </ul>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Functional Logic:</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Simulated a real traffic light cycle (Green → Yellow → Red).</li>
      <li>Enabled pedestrian crossing via button-triggered interrupt, switching signals accordingly.</li>
      <li>Activated audio (buzzer) and blinking walk light (LED) during walk phase.</li>
      <li>LCD screen dynamically displayed "Don't Walk" and "Walk" messages.</li>
    </ul>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">User Interaction:</h3>
    <p className="mb-4">
      Integrated a physical pushbutton to request crossing and used a light-dependent resistor (LDR) for ambient light response 
      calibration (if needed for future extensions).
    </p>

    <h3 className="text-xl font-semibold text-teal-300 mb-2">Skills Demonstrated:</h3>
    <ul className="list-disc list-inside">
      <li>Embedded C/C++ programming for microcontrollers</li>
      <li>Hardware assembly, soldering, and component testing</li>
      <li>Real-time logic design with state handling</li>
      <li>LCD and speaker peripheral interfacing</li>
      <li>Debugging and validation of embedded systems</li>
    </ul>
  </>
)
,
},
{
  id: "gold",
  title: "Gold Scalping EA",
  description: "Breakout-based Expert Advisor for XAUUSD built in MQL5.",
  image: gold,
  githubUrl: "https://github.com/Byski/goldscalpea.git",
  details: (
    <>
      {/* Notice Banner */}
      <div className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 p-4 rounded-lg border border-[#FF6B6B]/20 mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xl">⚠️</span>
          <p className="text-[#FF6B6B] font-medium">
            This EA is provided for educational and personal use only.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-teal-300 mb-4">Project Overview</h3>
      <p className="mb-4">
        Developed a fully automated trading system for MetaTrader 5 focused on gold (XAUUSD) scalping, using a breakout-based
        strategy with strict risk management principles. The EA identifies high-probability support and resistance zones and
        executes trades when a breakout is confirmed, targeting a consistent <strong>1:5 risk-reward ratio</strong>.
      </p>

      <h3 className="text-xl font-semibold text-teal-300 mb-2">Key Contributions:</h3>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Support & Resistance Detection:</strong> Implemented logic to scan historical bars and detect price levels with multiple rejections using a customizable lookback window and touch count threshold.</li>
        <li><strong>Breakout Logic:</strong> Confirmed breakout entries based on a defined multiplier beyond key levels, filtering out false signals and noise.</li>
        <li><strong>Trade Execution:</strong> Programmed automatic buy/sell orders using MetaTrader 5's trade API, calculating dynamic stop loss and take profit levels to maintain 1:5 R:R.</li>
        <li><strong>Risk Management:</strong> Configurable position sizing, slippage control, trade duration limit, and prevention of duplicate entries on the same symbol.</li>
        <li><strong>Debug & Maintainability:</strong> Included verbose debugging, modular code structure, and parameterized inputs for flexible backtesting and optimization.</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-300 mb-2">Strategy Logic:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Scan for valid resistance levels with repeated highs and for support levels with repeated lows.</li>
        <li>Trigger a long trade when price breaks above resistance by a configurable percentage.</li>
        <li>Trigger a short trade when price breaks below support by a similar margin.</li>
        <li>Stop loss is placed slightly beyond the broken level; take profit is set 5× the risk.</li>
        <li>Only one trade per breakout zone is allowed; trade closes after max duration if TP/SL not hit.</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-300 mb-2">Skills Demonstrated:</h3>
      <ul className="list-disc list-inside">
        <li>MQL5 programming and MetaTrader 5 platform automation</li>
        <li>Technical analysis implementation (S/R levels, breakout filters)</li>
        <li>Risk/reward calculation and money management strategies</li>
        <li>Trade execution and order management systems</li>
        <li>Debugging and optimizing trading algorithms</li>
      </ul>
    </>
  )
},

];

const hobbies = [
  {
    name: "Saxophone",
    icon: "🎷",
    description: "Jazz enthusiast and saxophone player",
    color: "from-[#5C4DFF] to-[#FF6B6B]",
    accentColor: "#FF6B6B",
    pattern: "circuit"
  },
  {
    name: "Archery",
    icon: "🎯",
    description: "Learning the art of archery",
    color: "from-[#00BFA6] to-[#00E5FF]",
    accentColor: "#00E5FF",
    pattern: "circuit"
  },
  {
    name: "Sci-Fi Shows",
    icon: "🚀",
    description: "Passionate about science fiction series",
    color: "from-[#5BC0EB] to-[#5C4DFF]",
    accentColor: "#FFC857",
    pattern: "circuit"
  }
];

function ProjectDetail({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (project.images?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? (project.images?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-100 p-10">
      <Link
        to="/"
        className="text-teal-300 text-sm hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>
      <h2 className="text-3xl font-bold text-teal-300 mb-8">{project.title}</h2>
      
      {/* Enhanced Image Section with Navigation */}
      <div className="flex flex-col gap-10">
        <div className="relative group">
          <motion.div 
            className="w-full overflow-hidden rounded-xl shadow-2xl bg-[#1e293b]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={currentImageIndex}
              src={project.images ? project.images[currentImageIndex] : project.image}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-contain transition-all duration-300 ease-in-out mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>

          {/* Navigation Arrows - Only show for projects with multiple images */}
          {project.images && project.images.length > 1 && (
            <>
              {/* Previous Arrow */}
              <motion.button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={handlePrevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* Next Arrow */}
              <motion.button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={handleNextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="bg-[#1e293b]/50 rounded-xl p-8 backdrop-blur-sm border border-teal-500/10 shadow-xl">
          <div className="text-lg text-gray-300 leading-relaxed">
            {project.details}
          </div>
        </div>
      </div>
      
      {/* GitHub Button */}
      <motion.div 
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-lg bg-gradient-to-br from-[#00BFA6] to-[#5C4DFF] text-white shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
          <span className="relative flex items-center">
            <svg 
              className="w-6 h-6 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 ml-2"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </span>
          
          {/* Animated particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial="hidden"
            whileHover="visible"
          >
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  left: `${50 + (i * 20)}%`,
                  top: '50%',
                }}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 0,
                    scale: 0
                  },
                  visible: {
                    opacity: [0, 1, 0],
                    y: [-20, -40],
                    scale: [0, 1, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }
                  }
                }}
              />
            ))}
          </motion.div>
        </motion.a>
      </motion.div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section id="home" className="text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-48 md:h-48 mx-auto overflow-hidden border-4 border-teal-500 rounded-full shadow-xl"
        >
          <img src={profilePic} alt="Ebokosia Ebube" className="w-full h-full object-cover" />
        </motion.div>
        <motion.h2 className="text-3xl md:text-4xl mt-6 font-bold tracking-tight text-teal-300" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
          Hello, I'm Ebokosia Ebube
        </motion.h2>
        <p className="mt-3 text-lg text-gray-300"> 3rd Year Computer Engineering Student at Technological University of The Shannon</p>
      </section>

      <section id="about" className="py-20 px-6 md:px-24 bg-[#1e293b]">
        <h3 className="text-2xl font-semibold text-center text-teal-300 mb-6">About Me</h3>
        <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
  <p>
    Hi, I'm a creative technologist who's been chasing curiosity since childhood.
  </p>
  <p>
    It started with me trying to recreate my favorite superhero in <span className="font-medium">Blender</span> and making games in <span className="font-medium">Unity</span>. Back then, I wasn't thinking about careers  I just loved figuring out how things worked and bringing ideas to life.
  </p>
  <p>
    That same curiosity led me to web development. I began with <span className="font-medium">HTML</span> and <span className="font-medium">CSS</span>, then explored deeper into <span className="font-medium">JavaScript</span> and <span className="font-medium">React</span>. I loved the power of turning a blank screen into something useful, visual, and interactive.
  </p>
  <p>
    Eventually, I got pulled into the world of trading. The structure of the markets fascinated me, and I started building my own automated strategies using <span className="font-medium">MQL5</span>. I picked up <span className="font-medium">Python</span> to analyze data and automate everything from alerts to trade logic.
  </p>
  <p>
    These days, I'm expanding into <span className="font-medium">cloud engineering</span>  learning how to scale and deploy smarter systems with <span className="font-medium">Kubernetes</span>, containers, and automation tools. For me, it's all connected: frontend, automation, embedded, and cloud.
  </p>

</div>

      </section>

      <section id="projects" className="py-20 px-6 md:px-24">
        <h3 className="text-2xl font-semibold text-center text-teal-300 mb-8">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#0f172a] p-5 rounded-2xl shadow-md border border-gray-700 hover:shadow-teal-500/50 transition cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h4 className="text-lg font-semibold text-teal-200 mb-1">{project.title}</h4>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

   <section id="skills" className="py-20 px-6 md:px-24 bg-[#0f172a] relative overflow-hidden">
  <h3 className="text-2xl font-semibold text-center text-[#00BFA6] mb-12">Skills & Technologies</h3>
  <div className="relative max-w-7xl mx-auto min-h-[600px]">
    {/* Background Animation Layer */}
    <div className="absolute inset-0">
      <motion.div 
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {skills.map((_, i) => {
            // Calculate positions in a distributed grid
            const row = Math.floor(i / 5); // 5 items per row
            const col = i % 5;
            const totalRows = Math.ceil(skills.length / 5);
            
            const x1 = 100 + (col * 250); // Spread horizontally
            const y1 = 100 + (row * 200); // Spread vertically
            
            // Connect to nearby skills
            return [
              (i + 1) % skills.length, // next skill
              (i + 5) % skills.length, // skill below
              (i + 4) % skills.length, // diagonal
            ].map(j => {
              const targetRow = Math.floor(j / 5);
              const targetCol = j % 5;
              
              const x2 = 100 + (targetCol * 250);
              const y2 = 100 + (targetRow * 200);
              
              return (
                <motion.path
                  key={`${i}-${j}`}
                  d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 50}, ${x2} ${y2}`}
                  stroke="rgba(94, 234, 212, 0.1)"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0.1, 0.2]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.05
                  }}
                />
              );
            });
          })}
        </svg>
      </motion.div>
    </div>

    {/* Skills Layer */}
    <div className="relative w-full h-full grid grid-cols-5 gap-4 p-4">
      {skills.map((skill, index) => {
        const row = Math.floor(index / 5);
        const col = index % 5;
        
        return (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            style={{ 
              gridColumn: col + 1,
              gridRow: row + 1,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.3,
                delay: index * 0.03
              }
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 10,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="w-20 h-20 bg-[#1e293b] border-2 border-[#00BFA6]/30 rounded-xl flex items-center justify-center shadow-lg hover:shadow-[#00BFA6]/50 transition-all backdrop-blur-sm"
              whileHover={{ 
                borderColor: "rgba(0, 191, 166, 0.8)",
                boxShadow: "0 0 15px rgba(0, 191, 166, 0.2)"
              }}
            >
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
            </motion.div>
            <span 
              className="mt-2 text-sm font-medium text-[#00BFA6] text-center bg-[#1e293b]/50 px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap"
            >
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

<section id="hobbies" className="py-20 px-6 md:px-24 bg-[#263238]">
  <h3 className="text-2xl font-semibold text-center text-[#00BFA6] mb-12">Hobbies & Interests</h3>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {hobbies.map((hobby, index) => (
      <motion.div
        key={hobby.name}
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: index * 0.2 
          }
        }}
        viewport={{ once: true }}
      >
        <div className={`
          relative group h-64 rounded-2xl p-6
          bg-gradient-to-br ${hobby.color}
          before:absolute before:inset-0 
          before:bg-[#263238]/40 before:rounded-2xl
          overflow-hidden
          border border-[#B0BEC5]/20
          backdrop-blur-sm
          hover:shadow-lg hover:shadow-${hobby.accentColor}/20
          transition-all duration-300
        `}>
          {/* Animated tech patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ECEFF1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-[#ECEFF1]">
            <motion.div
              className="text-6xl mb-4 filter drop-shadow-lg"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {hobby.icon}
            </motion.div>
            <h4 className="text-xl font-bold mb-2 tracking-wide">{hobby.name}</h4>
            <p className="text-center text-[#B0BEC5] font-medium">{hobby.description}</p>
          </div>

          {/* Hover effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t from-[${hobby.accentColor}]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
            whileHover={{ opacity: 1 }}
          />

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg border-[#ECEFF1]/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg border-[#ECEFF1]/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg border-[#ECEFF1]/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-lg border-[#ECEFF1]/30" />
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </div>
  );
}

function NavBar() {
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    // If we're not on home page, go there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#111827] sticky top-0 z-50 backdrop-blur">
      <div className="h-10">
        <img src={logo} alt="dev.by.me logo" className="h-full w-auto" />
      </div>
      <ul className="flex items-center space-x-6 font-medium text-sm">
        <li><Link to="/" className="hover:text-teal-300 transition">Home</Link></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-teal-300 transition">About</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-teal-300 transition">Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-teal-300 transition">Skills</a></li>
        <li><a href="#hobbies" onClick={(e) => handleNavClick(e, 'hobbies')} className="hover:text-teal-300 transition">Hobbies</a></li>
        <li>
          <motion.a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 py-2 overflow-hidden font-bold rounded-lg group bg-gradient-to-br from-[#00BFA6] to-[#5C4DFF] hover:from-[#5C4DFF] hover:to-[#00BFA6] text-white transition-all duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex items-center">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              My CV
            </span>
          </motion.a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-100 font-sans">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {projects.map((project) => (
            <Route key={project.id} path={`/project/${project.id}`} element={<ProjectDetail project={project} />} />
          ))}
        </Routes>

        <footer className="text-center text-xs p-4 text-gray-500 bg-[#111827]">
          © 2025 ebokosiaebube. Crafted with 💻 + ☕
        </footer>
      </div>
    </Router>
  );
}

export default App;
