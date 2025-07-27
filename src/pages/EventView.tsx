"use client"

import { ArrowLeft, Calendar } from "lucide-react"

export function EventViewPage() {
  const participants = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3K-xFUxhWOUoILCsBWm02rthtvBmgxoy_mrQrce5MT5Y5lfsZpIPEfS-6CMo87HwAY9pVn7qVEjIa5Gsr181PDcrWN-Z62GuiAknjPUPLPIX7ehmJUpPb1AoGp0DhcsXGTttj9SFoMm00RSIsHLUcE0JTTAv2wjMVUli76UDMJMXOwA9owC-qYYnnHruggi7b6iOAHcpCjqhs-S2l2p-cXenptf_ffW3IdA1jq4VsbzNDX1kKOevWT6aeFTPLT3RAoN-CtMz6FbF",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgg02oQONjw4fw_kkWMqOVNQ7n4Y-HfMDvU_FDM3jzTV7-jgb8IR5iNjHRkQzWaHYCyJ3NhZgCkyz3BfQ7_1OlfTggVsCGa6NhT29U2F9Rmx3VtHkgjp8fklyQAycRy5JX7DCdnCTEvY3FgNQC4oLwCU_2ho2B-Qnhl6w9eWCdsfwbNx5-6BOIF8TeE9V3XEi9N_cGEgEFVuV1RweKxS9c2Ti2UdN0FHemyPuQOk70Nxhnvv3NlVMCNvRIsZYYBNH7oFyH3f1-qE83",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGjTP0tNIJixqvW3LqYbviHQ1baIPD1jXcQdJmmrRGH1f-RkLjqHH8hdcbtfayiwoqKxCU7KpIR7W2XwUERMTXROo49AsxNN6sElhuRDbEeBUdXpqvDweSl9ZVYtZff1V8GlWILE6AP77YMDSJjT-D_dxch7pvAchjgAR2RCWy-ooxB-x6PwGqvhk9gTE_7tsFfSjd4r9IPumhX5amgUij6GFdgM3F8y8xppaJoUE4GF0Xn9dlcibRcea1cBxk5G_fpTz-5T5swIJ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDhLCLQBdPdQd8JEp-ob73jTsfOuxFzQqCKSkQtN8K7iNdPEI02X1Uc77HJ4atIgmikiS42RgUJM9TLkvwFI2PJI8zYLm3Z78CffTK41-GRrbG0lq2rYv-QohfmZf6Ig4n0cDrNFYRhYt_tK17DnhvTDTkn9AFdCjg4IF4ocnkRtITryMiHr9OwHX8AJn1eehVjvnHNV03SY9MgqileE_215kQJ6R-YQ-xI9S7y-eN6PWXbnOtpBOeTHEflGM4mA0NNelYrZmGLGXHl",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDGLGgBOC3pcYsDkN8tWVjoSfYZNV7ZUu_aiPnjco90vJpgpbGVGHJSkI0ICeRKEkONERAYw92GR7CFCcLbh187E9Vbdx8G0OBAyRobVX0-gGBsmUGYso9PIC7gOp4Cut9WG-HWtlTjDIvKmc00K2mI4FKdcwoGUs-uPN_jynhsJHeoi_y4b3GBriX6mzm24WZcmGdz7Rdt0X_0R0UzWbrG4_i2peoNDtMmu5UYjn7UV8S0Ofqy6qMhVCkQ2_2aBl0irXjK4bppUPRF",
  ]

  const tags = ["Engenharia", "LGBTQ+", "Mulheres na STEM"]

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111811] text-white font-sans">
      {/* Header */}
      <div className="flex items-center bg-[#111811] p-4 pb-2 justify-between">
        <div className="text-white flex size-12 shrink-0 items-center">
          <ArrowLeft size={24} />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Evento
        </h2>
      </div>

      <div className="flex-1">
        {/* Hero Image */}
        <div className="px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#111811] rounded-xl min-h-[218px]"
            style={{
              backgroundImage: `url("/placeholder.svg?height=218&width=400")`,
            }}
          />
        </div>

        {/* Event Title */}
        <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
          Festa de Boas-Vindas da Engenharia
        </h1>

        {/* Tags */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {tags.map((tag, index) => (
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
          {participants.map((participant, index) => (
            <div key={index} className={`overflow-visible ${index === participants.length - 1 ? "w-11" : "w-[34px]"}`}>
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
          Participantes (34): Você e 3 amigos
        </p>

        {/* Date and Time */}
        <div className="flex items-center gap-4 bg-[#111811] px-4 min-h-14">
          <div className="text-white flex items-center justify-center rounded-lg bg-[#293829] shrink-0 size-10">
            <Calendar size={24} />
          </div>
          <p className="text-white text-base font-normal leading-normal flex-1 truncate">
            Sáb, 22 de Julho · 20:00 - 02:00
          </p>
        </div>

        {/* Location */}
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Local: Salão de Festas da Engenharia
        </p>

        {/* Description */}
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
          Descrição: Celebre o início do semestre com muita música, dança e novas amizades! A festa de boas-vindas da
          Engenharia é o evento perfeito para conhecer seus colegas e professores em um ambiente descontraído. Teremos
          DJ, open bar e muita diversão!
        </p>

        {/* Tags Section */}
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Tags</h3>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {tags.map((tag, index) => (
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
