"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import {
  FaCode,
  FaBriefcase,
  FaFootballBall,
  FaDollarSign,
  FaPalette,
  FaMusic,
  FaLeaf,
  FaFlag,
  FaUsers,
} from "react-icons/fa";
import {
  MdEngineering,
  MdLocalHospital,
  MdBalance,
  MdPsychology,
  MdComputer,
  MdLightbulb,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";

interface Interest {
  id: string;
  name: string;
  icon: IconType;
}

const interests: Interest[] = [
  { id: "cs", name: "Ciência da Computação", icon: FaCode },
  { id: "engineering", name: "Engenharia", icon: MdEngineering },
  { id: "medicine", name: "Medicina", icon: MdLocalHospital },
  { id: "law", name: "Direito", icon: MdBalance },
  { id: "economics", name: "Economia", icon: FaDollarSign },
  { id: "psychology", name: "Psicologia", icon: MdPsychology },
  { id: "arts", name: "Artes", icon: FaPalette },
  { id: "music", name: "Música", icon: FaMusic },
  { id: "sports", name: "Esportes", icon: FaFootballBall },
  { id: "technology", name: "Tecnologia", icon: MdComputer },
  { id: "innovation", name: "Inovação", icon: MdLightbulb },
  { id: "entrepreneurship", name: "Empreendedorismo", icon: FaBriefcase },
  { id: "sustainability", name: "Sustentabilidade", icon: FaLeaf },
  { id: "politics", name: "Política", icon: FaFlag },
  { id: "culture", name: "Cultura", icon: FaUsers },
];

export function TagAddition() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleInterest = (interestId: string): void => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const filteredInterests = interests.filter((interest) =>
    interest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (selectedInterests.length >= 3) {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center bg-[#111811] p-4 pb-2 justify-between">
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
          Interesses
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button
            onClick={handleNext}
            className={`text-base font-bold leading-normal tracking-[0.015em] shrink-0 ${
              selectedInterests.length >= 3
                ? "text-white cursor-pointer"
                : "text-[#9db89d] cursor-not-allowed"
            }`}
            disabled={selectedInterests.length < 3}
          >
            Próximo
          </button>
        </div>
      </div>

      <div className="flex-1">
        {/* Title and Description */}
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          O que te interessa?
        </h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Selecione pelo menos 3 interesses para começar a ver conteúdo
          relevante.
        </p>

        {/* Interest Tags */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {filteredInterests.map((interest) => {
            const Icon = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            return (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-2 pr-4 transition-colors ${
                  isSelected
                    ? "bg-[#19e519] text-[#111811]"
                    : "bg-[#293829] hover:bg-[#3d4a3d] text-white"
                }`}
              >
                <Icon className="text-current" size={20} />
                <p className="text-current text-sm font-medium leading-normal">
                  {interest.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <div className="flex flex-col min-w-40 flex-1 relative">
            <input
              placeholder="Buscar interesses"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#293829] bg-[#293829] focus:border-[#19e519] h-14 placeholder:text-[#9db89d] p-[15px] text-base font-normal leading-normal pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9db89d]"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
