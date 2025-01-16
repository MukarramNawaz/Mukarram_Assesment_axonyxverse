import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SettingsSidebar from "./components/SettingsSidebar";
import Treatments from "./components/Treatments";
import Logo from "./assets/Logo.png";
import PFP from "./assets/Mukarram.jpg";
import { ChevronDown } from "lucide-react";
import Bell from "./assets/bell.png";

function App() {
  const [activeSettingsItem, setActiveSettingsItem] = useState("Treatments");

  return (
    <div className="min-h-screen font-montserrat ">
      <Sidebar />

      <div className=" ">
        <header className="bg-[#F9F9FB] ">
          <div className=" mx-auto px-8 py-5  flex items-center justify-between">
            <img src={Logo} alt="Logo" className="" />

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search"
                className="w-96 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2">
                <span className="sr-only">Notifications</span>
                <img src={Bell} alt="" className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-4">
                <img src={PFP} alt="Profile" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="text-sm font-medium">Mukarram Nawaz</div>
                  <div className="text-xs text-gray-500">Frontend Dev</div>
                </div>
                <button>
                  <ChevronDown className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto p-8 ml-20 rounded-2xl">
          <h1 className="text-4xl text-[#444753] font-bold mb-8">Settings</h1>

          <div className="flex gap-8">
            <SettingsSidebar
              activeItem={activeSettingsItem}
              onItemClick={setActiveSettingsItem}
            />

            {activeSettingsItem === "Treatments" && <Treatments />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
