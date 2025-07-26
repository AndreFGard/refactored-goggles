import { useNavigate, useLocation } from 'react-router-dom'
import { House, Users, PlusSquare, Bell, User } from '@phosphor-icons/react'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  path: string
  isDarkTheme?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, path, isDarkTheme = false }) => {
  const navigate = useNavigate()
  
  // Cores baseadas no tema e estado ativo
  const getTextColor = () => {
    if (isDarkTheme) {
      // Tema escuro (tag-addition)
      return isActive ? "text-white" : "text-[#a190cb]"
    } else {
      // Tema claro (home, profile)
      return isActive ? "text-[#0e1b0e]" : "text-[#4e974e]"
    }
  }

  const textColor = getTextColor()

  const handleClick = () => {
    navigate(path)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive ? "rounded-full" : ""} ${textColor} cursor-pointer`}
    >
      <div className={`${textColor} flex h-8 items-center justify-center`}>{icon}</div>
      <p className={`${textColor} text-xs font-medium leading-normal tracking-[0.015em]`}>{label}</p>
    </button>
  )
}

export function BottomNavigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  // Detectar se está na página tag-addition para usar tema escuro
  const isDarkTheme = location.pathname === '/tag-addition'
  
  // Cores de fundo baseadas no tema
  const getBgColors = () => {
    if (isDarkTheme) {
      return {
        border: "border-[#2d2249]",
        bg: "bg-[#201834]"
      }
    } else {
      return {
        border: "border-[#e7f3e7]", 
        bg: "bg-[#f8fcf8]"
      }
    }
  }

  const { border, bg } = getBgColors()

  return (
    <div className="w-full max-w-md mx-auto">
      <div className={`flex gap-2 border-t ${border} ${bg} px-4 pb-3 pt-2`}>
        <NavItem 
          icon={<House size={24} weight={isActive('/') ? "fill" : "regular"} />} 
          label="Início" 
          path="/" 
          isActive={isActive('/')}
          isDarkTheme={isDarkTheme}
        />
        <NavItem 
          icon={<Users size={24} weight={isActive('/tag-addition') ? "fill" : "regular"} />} 
          label="Comunidades" 
          path="/tag-addition"
          isActive={isActive('/tag-addition')}
          isDarkTheme={isDarkTheme}
        />
        <NavItem 
          icon={<PlusSquare size={24} weight={isActive('/event-view') ? "fill" : "regular"} />} 
          label="Criar" 
          path="/event-view"
          isActive={isActive('/event-view')}
          isDarkTheme={isDarkTheme}
        />
        <NavItem 
          icon={<Bell size={24} weight="regular" />} 
          label="Notificações" 
          path="/notifications"
          isActive={isActive('/notifications')}
          isDarkTheme={isDarkTheme}
        />
        <NavItem 
          icon={<User size={24} weight={isActive('/profile') ? "fill" : "regular"} />} 
          label="Perfil" 
          path="/profile"
          isActive={isActive('/profile')}
          isDarkTheme={isDarkTheme}
        />
      </div>
      <div className={`h-5 ${bg}`} />
    </div>
  )
}
