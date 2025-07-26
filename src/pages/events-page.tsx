"use client";

import type React from "react";
import { useState } from "react";
import {
  ArrowLeft,
  MagnifyingGlass,
  House,
  Users,
  PlusSquare,
  Bell,
  User,
} from "@phosphor-icons/react";

// Dados dos eventos com tags
const eventsData = [
  {
    id: 1,
    title: "Torneio de Vôlei de Praia",
    date: "15 de julho · 18:00",
    tags: ["Esportes"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGhMm27Oo1mlVyl4O69ASxHrvdbpA7K8JidhmXzVzUey-TGMAJ3ctZIW8fpVD1q9fnDgfxBG3y2r2N9ZyXNqAISyqPyF54Bk-aqyRSA0heiI6coIMcaGUw2ED-0zFfptWgNBeYFC-ka6-9VzwOFKwgVw-4UtdBlAlG8U7nYGT5_UYZedwECEaveVXt0JqqwIkLn5z1cT5xe-X3KbcXE6zsUplgqYuWYkJlEkVdI_lIRhegeHKDgRpGcR6rWkI5XruwBWNXwMORlw",
  },
  {
    id: 2,
    title: "Noite de Jazz no Campus",
    date: "20 de julho · 20:00",
    tags: ["Música", "Social"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3EJzEOg4UaBRQpy2qsNzR9jlka96QslAipjDR2FvJpJa4Di6fKlAjY7MomzIhj4TRCYNQQhTGtWiWjKUHdWcgWvRq928VTDGgl4zzKDeHrREm80sIF_z0Oavk7Kf2VavV5YuF4pjiNTn1t791VStKN1BOt1T1UdBEc62227Pwy-Ieg1h8asfXOlk7TNV573Q9n0vHk8X9CLFhmMwyW0bMafMxojSziw1MJuNSiNhKF6Wckakt6e0_Tk5A3j4J6-1Vx3dYvZ5iRA",
  },
  {
    id: 3,
    title: "Workshop de Escrita Criativa",
    date: "25 de julho · 14:00",
    tags: ["Acadêmico"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCluTl_hP53JC1qcdxQIlPzBvLAWf5sI20J6VmMPfzmUCZVhiLVcKZjz7r6fi87gMsPydhJ6RdcHwFaIJunsiemdKp3HwBxCvQLq9vViiaOMm_iOcWmxPL8f_1VoGJ69bCk-6voM9fqf5O58q_1Cfp_y249z7Ccw0N_00GZgBV7D_LJeXbNCeigj8EMgBjkCTx3iqbAgCdIoFHE4rB-6v5AhWyWd_uwDIFDqpZDUsgIZIcfjpDqFzHjFLlAb7ZqSvQshQaxTK_WyA",
  },
  {
    id: 4,
    title: "Festa de Verão",
    date: "30 de julho · 19:00",
    tags: ["Social"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJcpqgU11odmFrTDJ2WPZMobHWTaNxeScnwld_Qcv4jsEA-Z7wj6RxmentgDL50xg3P0OXjXUcC52vCJSb_VcoTpbA41uMZ0tQ0Zo_cM7AAH2SJpxwZZu2vMTRYgSiOi1D27c75-y8Z0QrKi_3eHvz3_bcwMFb8kI_JnN4nfv-jvjtv3WIeiPue5ZF9R3MXsL9ixgS1UDyjqpGzxpsathQLXCPUeI7q42mAbl9V_g2fb5RsMj1nf8OzIDNBcP5iR0G6wosegRxHQ",
  },
];

const tags = ["Esportes", "Música", "Acadêmico", "Social", "Voluntariado"];

// Componente do Header de Eventos
const EventsHeader: React.FC<{
  onBack: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}> = ({ onBack, searchTerm, onSearchChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center bg-[#111811] p-4 pb-2 justify-between">
      <button
        onClick={onBack}
        className="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer"
      >
        <ArrowLeft size={24} weight="regular" />
      </button>
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Eventos
      </h2>
      <div className="flex w-12 items-center justify-end">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
        >
          <MagnifyingGlass size={24} weight="regular" />
        </button>
      </div>
      {isSearchOpen && (
        <div className="absolute top-16 left-4 right-4 bg-[#293829] border border-[#9db89d] rounded-lg shadow-lg p-3 z-10">
          <input
            type="text"
            placeholder="Buscar eventos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-[#9db89d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#19e519] focus:border-transparent bg-[#111811] text-white placeholder:text-[#9db89d]"
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

// Componente de Abas
const EventsTabs: React.FC = () => {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#293829] px-4 gap-8">
        <a
          className="flex flex-col items-center justify-center border-b-[3px] border-b-[#19e519] text-white pb-[13px] pt-4"
          href="#"
        >
          <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
            Tags
          </p>
        </a>
      </div>
    </div>
  );
};

// Componente de Tags de Filtro
const FilterTags: React.FC<{
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}> = ({ selectedTags, onTagToggle }) => {
  return (
    <div className="flex gap-3 p-3 flex-wrap pr-4">
      {tags.map((tag, index) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <div
            key={index}
            onClick={() => onTagToggle(tag)}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${
              isSelected
                ? "bg-[#19e519] text-[#111811]"
                : "bg-[#293829] hover:bg-[#3d4d3d] text-white"
            }`}
          >
            <p className="text-sm font-medium leading-normal">{tag}</p>
          </div>
        );
      })}
    </div>
  );
};

// Componente de Item de Evento
interface EventItemProps {
  event: {
    id: number;
    title: string;
    date: string;
    image: string;
    tags: string[];
  };
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <div className="flex items-center gap-4 bg-[#111811] px-4 min-h-[72px] py-2 cursor-pointer hover:bg-[#293829] transition-colors">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 flex-shrink-0"
        style={{ backgroundImage: `url("${event.image}")` }}
      />
      <div className="flex flex-col justify-center flex-1">
        <p className="text-white text-base font-medium leading-normal line-clamp-1">
          {event.title}
        </p>
        <p className="text-[#9db89d] text-sm font-normal leading-normal line-clamp-2">
          {event.date}
        </p>
      </div>
    </div>
  );
};

// Componente do Item de Navegação
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive = false,
  href,
  onClick,
}) => {
  const textColor = isActive ? "text-[#19e519]" : "text-[#9db89d]";

  return (
    <a
      className={`just flex flex-1 flex-col items-center justify-end gap-1 ${
        isActive ? "rounded-full" : ""
      } ${textColor} cursor-pointer`}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <div className={`${textColor} flex h-8 items-center justify-center`}>
        {icon}
      </div>
      <p
        className={`${textColor} text-xs font-medium leading-normal tracking-[0.015em]`}
      >
        {label}
      </p>
    </a>
  );
};

// Componente da Navegação Inferior
const BottomNavigation: React.FC<{
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
}> = ({ onNavigateHome, onNavigateProfile }) => {
  return (
    <div>
      <div className="flex gap-2 border-t border-[#293829] bg-[#111811] px-4 pb-3 pt-2">
        <NavItem
          icon={<House size={24} weight="fill" />}
          label="Início"
          href="#"
          onClick={onNavigateHome}
          isActive={true}
        />
        <NavItem
          icon={<Users size={24} weight="regular" />}
          label="Comunidades"
          href="#"
        />
        <NavItem
          icon={<PlusSquare size={24} weight="regular" />}
          label="Criar"
          href="#"
        />
        <NavItem
          icon={<Bell size={24} weight="regular" />}
          label="Notificações"
          href="#"
        />
        <NavItem
          icon={<User size={24} weight="regular" />}
          label="Perfil"
          href="#"
          onClick={onNavigateProfile}
        />
      </div>
      <div className="h-5 bg-[#111811]" />
    </div>
  );
};

// Componente Principal da Página de Eventos
const EventsPage: React.FC<{
  onNavigateHome: () => void;
  onNavigateProfile: () => void;
}> = ({ onNavigateHome, onNavigateProfile }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      event.tags.some((tag) => selectedTags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111811] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <EventsHeader
          onBack={onNavigateHome}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <EventsTabs />
        <FilterTags selectedTags={selectedTags} onTagToggle={handleTagToggle} />
        <div className="flex flex-col">
          {filteredEvents.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>
      <BottomNavigation
        onNavigateHome={onNavigateHome}
        onNavigateProfile={onNavigateProfile}
      />
    </div>
  );
};

export default EventsPage;
