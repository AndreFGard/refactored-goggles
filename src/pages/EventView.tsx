"use client"

import { Calendar } from "lucide-react"
import { useParams } from "react-router-dom"
import TopNavigation from "../components/TopNavigation"

export function EventViewPage() {
  const { id } = useParams<{ id: string }>();

  // Mock event data - in a real app this would come from an API
  const eventsData: Record<string, any> = {
    "1": {
      title: "Torneio de Vôlei de Praia",
      date: "Sáb, 15 de Julho · 18:00 - 22:00",
      location: "Quadra de Vôlei da Universidade",
      description: "Participe do nosso torneio de vôlei de praia! Uma oportunidade incrível para conhecer pessoas, se divertir e mostrar suas habilidades no esporte. Inscrições abertas para todos os níveis.",
      tags: ["Esportes", "Competição", "Ao Ar Livre"],
      participants: 28,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGhMm27Oo1mlVyl4O69ASxHrvdbpA7K8JidhmXzVzUey-TGMAJ3ctZIW8fpVD1q9fnDgfxBG3y2r2N9ZyXNqAISyqPyF54Bk-aqyRSA0heiI6coIMcaGUw2ED-0zFfptWgNBeYFC-ka6-9VzwOFKwgVw-4UtdBlAlG8U7nYGT5_UYZedwECEaveVXt0JqqwIkLn5z1cT5xe-X3KbcXE6zsUplgqYuWYkJlEkVdI_lIRhegeHKDgRpGcR6rWkI5XruwBWNXwMORlw"
    },
    "2": {
      title: "Noite de Jazz no Campus",
      date: "Sex, 20 de Julho · 20:00 - 23:00",
      location: "Auditório Central",
      description: "Uma noite especial com música jazz ao vivo! Apresentações de bandas locais e estudantes da universidade. Ambiente descontraído com drinks e networking.",
      tags: ["Música", "Social", "Arte"],
      participants: 45,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3EJzEOg4UaBRQpy2qsNzR9jlka96QslAipjDR2FvJpJa4Di6fKlAjY7MomzIhj4TRCYNQQhTGtWiWjKUHdWcgWvRq928VTDGgl4zzKDeHrREm80sIF_z0Oavk7Kf2VavV5YuF4pjiNTn1t791VStKN1BOt1T1UdBEc62227Pwy-Ieg1h8asfXOlk7TNV573Q9n0vHk8X9CLFhmMwyW0bMafMxojSziw1MJuNSiNhKF6Wckakt6e0_Tk5A3j4J6-1Vx3dYvZ5iRA"
    },
    "3": {
      title: "Workshop de Escrita Criativa",
      date: "Qua, 25 de Julho · 14:00 - 17:00",
      location: "Sala de Estudos 201",
      description: "Desenvolva suas habilidades de escrita criativa com exercícios práticos e feedback personalizado. Workshop conduzido por professores do departamento de Letras.",
      tags: ["Acadêmico", "Criatividade", "Literatura"],
      participants: 15,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCluTl_hP53JC1qcdxQIlPzBvLAWf5sI20J6VmMPfzmUCZVhiLVcKZjz7r6fi87gMsPydhJ6RdcHwFaIJunsiemdKp3HwBxCvQLq9vViiaOMm_iOcWmxPL8f_1VoGJ69bCk-6voM9fqf5O58q_1Cfp_y249z7Ccw0N_00GZgBV7D_LJeXbNCeigj8EMgBjkCTx3iqbAgCdIoFHE4rB-6v5AhWyWd_uwDIFDqpZDUsgIZIcfjpDqFzHjFLlAb7ZqSvQshQaxTK_WyA"
    },
    "4": {
      title: "Festa de Verão",
      date: "Sáb, 30 de Julho · 19:00 - 02:00",
      location: "Pátio Principal da Universidade",
      description: "A maior festa de verão do campus! DJ, food trucks, atividades ao ar livre e muita diversão. Traga seus amigos e prepare-se para uma noite inesquecível!",
      tags: ["Social", "Festa", "Música"],
      participants: 120,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJcpqgU11odmFrTDJ2WPZMobHWTaNxeScnwld_Qcv4jsEA-Z7wj6RxmentgDL50xg3P0OXjXUcC52vCJSb_VcoTpbA41uMZ0tQ0Zo_cM7AAH2SJpxwZZu2vMTRYgSiOi1D27c75-y8Z0QrKi_3eHvz3_bcwMFb8kI_JnN4nfv-jvjtv3WIeiPue5ZF9R3MXsL9ixgS1UDyjqpGzxpsathQLXCPUeI7q42mAbl9V_g2fb5RsMj1nf8OzIDNBcP5iR0G6wosegRxHQ"
    }
  };

  // Get event data or fallback to default
  const eventData = eventsData[id || "1"] || eventsData["1"];

  const participants = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3K-xFUxhWOUoILCsBWm02rthtvBmgxoy_mrQrce5MT5Y5lfsZpIPEfS-6CMo87HwAY9pVn7qVEjIa5Gsr181PDcrWN-Z62GuiAknjPUPLPIX7ehmJUpPb1AoGp0DhcsXGTttj9SFoMm00RSIsHLUcE0JTTAv2wjMVUli76UDMJMXOwA9owC-qYYnnHruggi7b6iOAHcpCjqhs-S2l2p-cXenptf_ffW3IdA1jq4VsbzNDX1kKOevWT6aeFTPLT3RAoN-CtMz6FbF",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgg02oQONjw4fw_kkWMqOVNQ7n4Y-HfMDvU_FDM3jzTV7-jgb8IR5iNjHRkQzWaHYCyJ3NhZgCkyz3BfQ7_1OlfTggVsCGa6NhT29U2F9Rmx3VtHkgjp8fklyQAycRy5JX7DCdnCTEvY3FgNQC4oLwCU_2ho2B-Qnhl6w9eWCdsfwbNx5-6BOIF8TeE9V3XEi9N_cGEgEFVuV1RweKxS9c2Ti2UdN0FHemyPuQOk70Nxhnvv3NlVMCNvRIsZYYBNH7oFyH3f1-qE83",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGjTP0tNIJixqvW3LqYbviHQ1baIPD1jXcQdJmmrRGH1f-RkLjqHH8hdcbtfayiwoqKxCU7KpIR7W2XwUERMTXROo49AsxNN6sElhuRDbEeBUdXpqvDweSl9ZVYtZff1V8GlWILE6AP77YMDSJjT-D_dxch7pvAchjgAR2RCWy-ooxB-x6PwGqvhk9gTE_7tsFfSjd4r9IPumhX5amgUij6GFdgM3F8y8xppaJoUE4GF0Xn9dlcibRcea1cBxk5G_fpTz-5T5swIJ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhLCLQBdPdQd8JEp-ob73jTsfOuxFzQqCKSkQtN8K7iNdPEI02X1Uc77HJ4atIgmikiS42RgUJM9TLkvwFI2PJI8zYLm3Z78CffTK41-GRrbG0lq2rYv-QohfmZf6Ig4n0cDrNFYRhYt_tK17DnhvTDTkn9AFdCjg4IF4ocnkRtITryMiHr9OwHX8AJn1eehVjvnHNV03SY9MgqileE_215kQJ6R-YQ-xI9S7y-eN6PWXbnOtpBOeTHEflGM4mA0NNelYrZmGLGXHl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGLGgBOC3pcYsDkN8tWVjoSfYZNV7ZUu_aiPnjco90vJpgpbGVGHJSkI0ICeRKEkONERAYw92GR7CFCcLbh187E9Vbdx8G0OBAyRobVX0-gGBsmUGYso9PIC7gOp4Cut9WG-HWtlTjDIvKmc00K2mI4FKdcwoGUs-uPN_jynhsJHeoi_y4b3GBriX6mzm24WZcmGdz7Rdt0X_0R0UzWbrG4_i2peoNDtMmu5UYjn7UV8S0Ofqy6qMhVCkQ2_2aBl0irXjK4bppUPRF",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavigation title="Evento" showBackButton={true} />

      <div className="flex-1">
        {/* Hero Image */}
        <div className="px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#111811] rounded-xl min-h-[218px]"
            style={{
              backgroundImage: `url("${eventData.image}")`,
            }}
          />
        </div>

        {/* Event Title */}
        <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
          {eventData.title}
        </h1>

        {/* Tags */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {eventData.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#293829] pl-4 pr-4"
            >
              <p className="text-white text-sm font-medium leading-normal">{tag}</p>
            </div>
          ))}
        </div>

        {/* Participant Avatars */}
        <div className="flex items-center px-4 py-3 justify-start">
          {participants.slice(0, 5).map((_, index) => (
            <div key={index} className={`overflow-visible ${index === 4 ? "w-11" : "w-[34px]"}`}>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover border-[#111811] bg-[#293829] text-[#9db89d] rounded-full flex items-center justify-center size-11 border-4"
                style={{
                  backgroundImage: `url("/placeholder.svg?height=44&width=44")`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Participants Count */}
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Participantes ({eventData.participants}): Você e {Math.min(eventData.participants - 1, 3)} amigos
        </p>

        {/* Date and Time */}
        <div className="flex items-center gap-4 bg-[#111811] px-4 min-h-14">
          <div className="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-10">
            <Calendar size={24} />
          </div>
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            {eventData.date}
          </p>
        </div>

        {/* Location */}
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Local: {eventData.location}
        </p>

        {/* Description */}
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Descrição: {eventData.description}
        </p>

        {/* Tags Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Tags</h3>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {eventData.tags.map((tag: string, index: number) => (
            <div
              key={index}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#293829] pl-4 pr-4"
            >
              <p className="text-white text-sm font-medium leading-normal">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div>
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#19e519] text-[#111811] text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Participar</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#293829] text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Salvar</span>
            </button>
          </div>
        </div>
        <div className="h-5 bg-[#111811]" />
      </div>
    </div>
  )
}
