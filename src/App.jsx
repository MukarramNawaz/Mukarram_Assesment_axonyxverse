// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import SettingsSidebar from "./components/SettingsSidebar";
// import Treatments from "./components/Treatments";
// import Logo from "./assets/Logo.png";
// import PFP from "./assets/Mukarram.jpg";
// import { ChevronDown, Bell, Search } from "lucide-react";

// function App() {
//   const [activeSettingsItem, setActiveSettingsItem] = useState("Treatments");

//   return (
//     <div className="min-h-screen font-montserrat ">
//       <Sidebar />

//       <div className=" ">
//         <header className="bg-[#F9F9FB] ">
//           <div className=" mx-auto px-8 py-5  flex items-center justify-between">
//             <img src={Logo} alt="Logo" className="" />

//             <div className="relative max-w-2xl w-full">
//               <Search
//                 className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full px-12 py-2 rounded-lg border border-[#DADAFC] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               />
//             </div>
//             <div className="flex items-center gap-4">
//               <button className="relative inline-block mr-3">
//                 <Bell className="text-primary" size={24} />
//                 <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
//               </button>
//               <div className="flex items-center gap-4">
//                 <img src={PFP} alt="Profile" className="w-8 h-8 rounded-full" />
//                 <div>
//                   <div className="text-sm font-medium">Mukarram Nawaz</div>
//                   <div className="text-xs text-gray-500">Frontend Dev</div>
//                 </div>
//                 <button>
//                   <ChevronDown className="text-gray-400" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="mx-auto p-8 ml-20 rounded-2xl">
//           <h1 className="text-4xl text-[#444753] font-bold mb-8">Settings</h1>

//           <div className="flex gap-8">
//             <SettingsSidebar
//               activeItem={activeSettingsItem}
//               onItemClick={setActiveSettingsItem}
//             />

//             {activeSettingsItem === "Treatments" && <Treatments />}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SettingsSidebar from "./components/SettingsSidebar";
import Treatments from "./components/Treatments";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
function App() {
  const [activeSettingsItem, setActiveSettingsItem] = useState("Treatments");

  return (
    <div className="min-h-screen font-montserrat ">
      <Sidebar />

      <div className=" ">
        <Header />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick
        />
        <main className="mx-auto p-8 ml-24 rounded-2xl">
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