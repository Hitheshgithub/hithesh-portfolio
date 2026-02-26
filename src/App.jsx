import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import Background3D from "./components/Background3D";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="relative min-h-screen bg-white dark:bg-[#0B1120] text-black dark:text-white overflow-hidden transition-all">

        <Background3D />

        <nav className="flex justify-between items-center p-6 backdrop-blur-md bg-white/10">
          <h1 className="text-2xl font-bold">HITHESH.dev</h1>
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>

        <section className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Mungara Hithesh Yadav
          </motion.h1>

          <p className="mt-6 text-xl text-gray-400">
            Site Reliability Engineer | DevOps Engineer
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-blue-600 rounded-xl flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
