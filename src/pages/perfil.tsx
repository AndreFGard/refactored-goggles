"use client";

import type React from "react";
import TopNavigation from "../components/TopNavigation";

// Dados do perfil
const profileData = {
  name: "Lucas Mendes",
  username: "@lucasmendes",
  bio: "Estudante de Engenharia | Apaixonado por tecnologia e inovação",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfA7tbH-E9pI3iK69dgGfnJH_wUx2EaFP31XaFvXhBUCeB90SidrZd0dm_06Y_cKPm0Ownu5w-_UUAWYfKC_Lb5SATTIVDxKKW4XO2pkoXhNLS4X88hxtRDY_AKLvqrUuGaGyygABLMwj1Wdlz2ZNRK_E7FMyhPGfVLGbBcJf4fhiZ2xRLYv08d0ExHCIOBADhOHRBz44wc1S5-4tWDZUZOkQtCEFfsbdzYl722c4RezwsiLi9QVlN7tYVpSNq06Y92FTFwa0ECw",
  followers: 234,
  following: 120,
};

const upcomingEvents = [
  {
    id: 1,
    date: "22 de Julho · 19:00",
    title: "Hackathon de Inovação",
    description:
      "Participe do nosso hackathon e crie soluções inovadoras para desafios reais.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSgRuKJsvzWsND2zlZwSE1fz3oKZ-Im1NQ2NBoLpskAaeR0kEBED4EIIBqCcrq53lhiR-H0aDSWlKFyFSUmfBHRnmIXl5eZzjTC7K_iv2PkC2ZjnoA1kFhXn4LpTxZ3__xJF0I9J3t8wzqeRPL9eCIhnNa_Y01oK5DgUFIgFbCYxzzDLImRZaQKI3uYLFOURuiLfdo3eTf8yHRk7yx4jpmMMmaq3s2QTu8mWhguMZHBYNf9xYRbwKppcfQtnFsDcRvYou75gT27g",
  },
];

const pastEvents = [
  {
    id: 2,
    date: "15 de Junho · 18:00",
    title: "Workshop de Design Thinking",
    description:
      "Aprenda a aplicar o design thinking para resolver problemas de forma criativa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDASEM2oHVczt3oG4sRLGS623RpnHGJJouEKuX3--5Nvt0_ebe1mcK_TY-u1F4ml6qFa7CZqCtT0Btn7G5fxwW5yywjoq1hHj8qa6endO1NZxbTkwvH794_lcAaGjGMAveDin8RYd7ovtFAucHirxccvj1hlLB58v33M9BY7aU0Es0UZHmElSJowPkpLVqfq41fOHxUA1ayet8h7GY_sBzNQMAYiDVOBPsoFs078Hkee5mB0UxaP99isUwie7Xy9-5rcfp_C-QiEw",
  },
];

// Componente de Informações do Perfil
const ProfileInfo: React.FC = () => {
  return (
    <div className="flex p-4">
      <div className="flex w-full flex-col gap-4 items-center">
        <div className="flex gap-4 flex-col items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            style={{ backgroundImage: `url("${profileData.avatar}")` }}
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
              {profileData.name}
            </p>
            <p className="text-[#9db89d] text-base font-normal leading-normal text-center">
              {profileData.username}
            </p>
            <p className="text-[#9db89d] text-base font-normal leading-normal text-center">
              {profileData.bio}
            </p>
          </div>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#293829] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px]">
          <span className="truncate">Editar Perfil</span>
        </button>
      </div>
    </div>
  );
};

// Componente de Estatísticas
const ProfileStats: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 px-4 py-3">
      <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#293829] p-3 items-center text-center">
        <p className="text-white tracking-light text-2xl font-bold leading-tight">
          {profileData.followers}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[#9db89d] text-sm font-normal leading-normal">
            Seguidores
          </p>
        </div>
      </div>
      <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#293829] p-3 items-center text-center">
        <p className="text-white tracking-light text-2xl font-bold leading-tight">
          {profileData.following}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[#9db89d] text-sm font-normal leading-normal">
            Seguindo
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente de Abas
const ProfileTabs: React.FC = () => {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#293829] px-4 gap-8">
        <a
          className="flex flex-col items-center justify-center border-b-[3px] border-b-[#19e519] text-white pb-[13px] pt-4"
          href="#"
        >
          <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
            Eventos Criados
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9db89d] pb-[13px] pt-4"
          href="#"
        >
          <p className="text-[#9db89d] text-sm font-bold leading-normal tracking-[0.015em]">
            Grupos Participando
          </p>
        </a>
        <a
          className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#9db89d] pb-[13px] pt-4"
          href="#"
        >
          <p className="text-[#9db89d] text-sm font-bold leading-normal tracking-[0.015em]">
            Interesses
          </p>
        </a>
      </div>
    </div>
  );
};

// Componente de Card de Evento
interface EventCardProps {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    image: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-xl">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#9db89d] text-sm font-normal leading-normal">
              {event.date}
            </p>
            <p className="text-white text-base font-bold leading-tight">
              {event.title}
            </p>
            <p className="text-[#9db89d] text-sm font-normal leading-normal">
              {event.description}
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#293829] text-white text-sm font-medium leading-normal w-fit">
            <span className="truncate">Ver Detalhes</span>
          </button>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
          style={{ backgroundImage: `url("${event.image}")` }}
        />
      </div>
    </div>
  );
};

// Componente Principal da Página de Perfil
const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigation title="Perfil" showBackButton={true} />

      <div className="flex-1">
        <ProfileInfo />
        <ProfileStats />
        <ProfileTabs />

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Próximos Eventos
        </h3>
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Eventos Passados
        </h3>
        {pastEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
