"use client"

import { useState } from "react"
import {
  Code,
  Settings,
  Stethoscope,
  Scale,
  DollarSign,
  Brain,
  Palette,
  Music,
  ClubIcon as Football,
  Cpu,
  Lightbulb,
  Briefcase,
  Leaf,
  Flag,
  Users,
  Home,
  PlusSquare,
  Bell,
  User,
  Search,
} from "lucide-react"

const interests = [
  { id: "cs", label: "Ciência da Computação", icon: Code },
  { id: "engineering", label: "Engenharia", icon: Settings },
  { id: "medicine", label: "Medicina", icon: Stethoscope },
  { id: "law", label: "Direito", icon: Scale },
  { id: "economics", label: "Economia", icon: DollarSign },
  { id: "psychology", label: "Psicologia", icon: Brain },
  { id: "arts", label: "Artes", icon: Palette },
  { id: "music", label: "Música", icon: Music },
  { id: "sports", label: "Esportes", icon: Football },
  { id: "technology", label: "Tecnologia", icon: Cpu },
  { id: "innovation", label: "Inovação", icon: Lightbulb },
  { id: "entrepreneurship", label: "Empreendedorismo", icon: Briefcase },
  { id: "sustainability", label: "Sustentabilidade", icon: Leaf },
  { id: "politics", label: "Política", icon: Flag },
  { id: "culture", label: "Cultura", icon: Users },
]

export function TagAddition() {
  const [selectedInterests, setSelectedInterests] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleInterest = (interestId) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId],
    )
  }

  const filteredInterests = interests.filter((interest) =>
    interest.label.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#161023] justify-between font-['Spline_Sans','Noto_Sans',sans-serif]">
      {/* Header */}
      <div>
        <div className="flex items-center bg-[#161023] p-4 pb-2 justify-between">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Interesses
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className={`text-base font-bold leading-normal tracking-[0.015em] shrink-0 ${
                selectedInterests.length >= 3 ? "text-white" : "text-[#a190cb]"
              }`}
              disabled={selectedInterests.length < 3}
            >
              Próximo
            </button>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          O que te interessa?
        </h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Selecione pelo menos 3 interesses para começar a ver conteúdo relevante.
        </p>

        {/* Interest Tags */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {filteredInterests.map((interest) => {
            const Icon = interest.icon
            const isSelected = selectedInterests.includes(interest.id)

            return (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-2 pr-4 transition-colors ${
                  isSelected ? "bg-[#6366f1] border border-[#6366f1]" : "bg-[#2d2249] hover:bg-[#3d3259]"
                }`}
              >
                <Icon className="text-white" size={20} />
                <p className="text-white text-sm font-medium leading-normal">{interest.label}</p>
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <div className="flex flex-col min-w-40 flex-1 relative">
            <input
              placeholder="Buscar interesses"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#413168] bg-[#201834] focus:border-[#413168] h-14 placeholder:text-[#a190cb] p-[15px] text-base font-normal leading-normal pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a190cb]" size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#2d2249] bg-[#201834] px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-white" href="#">
            <div className="text-white flex h-8 items-center justify-center">
              <Home size={24} fill="currentColor" />
            </div>
            <p className="text-white text-xs font-medium leading-normal tracking-[0.015em]">Início</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#a190cb]" href="#">
            <div className="text-[#a190cb] flex h-8 items-center justify-center">
              <Users size={24} />
            </div>
            <p className="text-[#a190cb] text-xs font-medium leading-normal tracking-[0.015em]">Comunidades</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#a190cb]" href="#">
            <div className="text-[#a190cb] flex h-8 items-center justify-center">
              <PlusSquare size={24} />
            </div>
            <p className="text-[#a190cb] text-xs font-medium leading-normal tracking-[0.015em]">Criar</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#a190cb]" href="#">
            <div className="text-[#a190cb] flex h-8 items-center justify-center">
              <Bell size={24} />
            </div>
            <p className="text-[#a190cb] text-xs font-medium leading-normal tracking-[0.015em]">Notificações</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#a190cb]" href="#">
            <div className="text-[#a190cb] flex h-8 items-center justify-center">
              <User size={24} />
            </div>
            <p className="text-[#a190cb] text-xs font-medium leading-normal tracking-[0.015em]">Perfil</p>
          </a>
        </div>
        <div className="h-5 bg-[#201834]"></div>
      </div>
    </div>
  )
}

