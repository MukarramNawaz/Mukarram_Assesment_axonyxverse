import { useState, useEffect } from "react";
import { RiCloseLine, RiAddLine } from "react-icons/ri";
import { Listbox, Transition, ListboxOption, ListboxButton, ListboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
const initialCategories = [
  "Injectables",
  "Skin Improvement",
  "Hair Removal",
  "Soft Surgery",
  "Plastic Surgery",
];

const allTreatments = {
  "Skin Improvement": [
    "Chemical Peels",
    "Microdermabrasion",
    "Laser Treatments",
    "Light Therapies",
  ],
  Injectables: ["Botox", "Dermal Fillers", "Lip Enhancement"],
  "Hair Removal": ["Laser Hair Removal", "IPL Treatment", "Electrolysis"],
  "Soft Surgery": ["Thread Lifts", "Plasma Pen", "RF Microneedling"],
  "Plastic Surgery": ["Rhinoplasty", "Facelift", "Liposuction"],
};

export default function Treatments() {
  const [selectedCategory, setSelectedCategory] = useState("Skin Improvement");
  const [treatments, setTreatments] = useState({});
  const [selectedTreatment, setSelectedTreatment] = useState("");

  useEffect(() => {
    const savedTreatments = localStorage.getItem("treatments");
    if (savedTreatments) {
      setTreatments(JSON.parse(savedTreatments));
    } else {
      setTreatments(allTreatments);
    }
  }, []);

  const handleSave = () => {
    // saving all the treatments to local storage
    toast.success("Treatments saved successfully!");
    localStorage.setItem("treatments", JSON.stringify(treatments));
  };

  const handleCancel = () => {
    const savedTreatments = localStorage.getItem("treatments");
    if (savedTreatments) {
      setTreatments(JSON.parse(savedTreatments));
    } else {
      setTreatments(allTreatments);
    }
  };


  const handleAddTreatment = () => {
    if (
      selectedTreatment &&
      !treatments[selectedCategory]?.includes(selectedTreatment)
    ) {
      setTreatments((prev) => ({
        ...prev,
        [selectedCategory]: [
          ...(prev[selectedCategory] || []),
          selectedTreatment,
        ],
      }));
      setSelectedTreatment("");
    }
  };

  const handleRemoveTreatment = (treatment) => {
    setTreatments((prev) => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].filter((t) => t !== treatment),
    }));
  };


  const availableTreatments =
    allTreatments[selectedCategory]?.filter(
      (treatment) => !treatments[selectedCategory]?.includes(treatment)
    ) || [];

  return (
    <div className="flex-1 ">
      <h1 className="text-2xl font-semibold mb-8 text-[#3E4147]">Treatments</h1>

      <div className="flex gap-8">
      {/* displaying all the categoories */}
        <div className="w-80">
          {initialCategories.map((category) => (
            <button
              key={category}
              className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#F2F5FF] text-primary font-semibold"
                  : "text-[#71788E] hover:bg-gray-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>


        <div className="flex-1 max-w-3xl bg-[#F9FAFF] rounded-xl pb-4">
          <div className="rounded-lg p-6">
        
            <div className="flex flex-col items-start justify-between gap-1 mb-4 mx-2">
              <h2 className="text-lg font-semibold text-[#1F1F3A]">
                {selectedCategory} ({treatments[selectedCategory]?.length || 0})
              </h2>
              <span className="text-sm text-[#8383A3]">Treatments</span>
            </div>

      {/* the treatment sections/table */}
           
            <div className="border border-[#E4E4F8]  bg-white rounded-lg mb-6">
              {treatments[selectedCategory]?.map((treatment, index) => (
                <div
                  key={treatment}
                  className={`flex items-center justify-between  ${
                    index < treatments[selectedCategory].length - 1
                      ? "border-b"
                      : ""
                  } border-[#E4E4F8]`}
                >
                  <span className="text-sm text-[#585C6A] font-[500] p-3 ">
                    {treatment}
                  </span>
                  <div className=" border-l border-[#E4E4F8] p-3 ">
                    <button
                      onClick={() => handleRemoveTreatment(treatment)}
                      className="text-[#A5A5C3] hover:text-red-500 transition-colors p-2"
                    >
                      <RiCloseLine className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

     
            <div className="flex gap-3 mx-2">  {/* adding treatments */}
              <div className="flex-1">
                <Listbox
                  value={selectedTreatment}
                  onChange={setSelectedTreatment}
                >
                  <div className="relative">
                    <ListboxButton className="w-full p-3 bg-white border border-[#E4E4F8] rounded-lg text-sm text-[#71788E] focus:outline-none focus:ring focus:ring-[#DADAFC] text-left flex items-center justify-between">
                      <span>{selectedTreatment || "Select Treatment..."}</span>
                      <ChevronDown className="w-5 h-5 text-[#71788E]" />
                    </ListboxButton>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <ListboxOptions className="absolute w-full py-1 mt-1 overflow-auto bg-white border border-[#E4E4F8] rounded-lg max-h-60 focus:outline-none">
                        {availableTreatments.map((treatment) => (
                          <ListboxOption
                            key={treatment}
                            value={treatment}
                            className={({ active }) =>
                              `${
                                active
                                  ? "text-[#5757D6] bg-[#F7F7FD]"
                                  : "text-[#71788E]"
                              }
                      cursor-default select-none relative py-2 pl-3 pr-9`
                            }
                          >
                            {treatment}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <button
                onClick={handleAddTreatment}
                className="p-3 bg-white text-[#5757D6] border-2 border-[#E4E4F8] rounded-lg transition-colors flex items-center justify-center"
              >
                <RiAddLine className="w-5 h-5" />
              </button>
            </div>
          </div>

      
          <div className="flex items-center justify-center gap-4 mt-6 mx-6">
            <button
              onClick={handleCancel}
              className="w-full py-3 font-[600] border-2 border-[#E4E4F8] bg-white/50 rounded-xl text-[#6968EC] hover:bg-[#F9FAFF] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full py-3 font-medium bg-[#6968EC] text-white rounded-xl hover:bg-[#5757D6] transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
