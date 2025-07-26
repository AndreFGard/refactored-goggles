import React, { useState } from "react"
import type { NextPage } from "next"
import { MagnifyingGlass, House, Users, PlusSquare, Bell, User } from "@phosphor-icons/react"

// Dados dos grupos/eventos
const myGroups = [
	{
		id: 1,
		name: "Grupo de Estudos de Engenharia",
		members: "15 membros",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuB-q8lZbQqu7RVP4MrYHtfgxTJYuOvwASToKEruyyZpkD5KJIEMABmP9dQvLucYINrjMLF0mfqjZ6TAR8IpKH_lrDwyg0Mc8hI38vAyiermOIMfDxHMpYP5xB6qGg1j_F-Lqj9bLe2oji24uen22vb056_fCw2lquHeGsmqUv-YdR6jlQmhAs7FyZAd4VsPAmGYavwbv_OP2MYS4NNyUhOqYDHBhWhkAz8gLlGnsTPu7PHrThRfuyWQsriw-T1BGxa5Oz1n9AenGw",
	},
	{
		id: 2,
		name: "Torneio de Xadrez",
		members: "20 participantes",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCbZ8AOITJBbf5xgVMVmTL1vUZv-lTS9D5Yyxqsb5J0Zx7uZpSk_Tm9iqoE_M5nbqmH_wtQNnDj4RHabjQRujEA3cmBBxulkGOjrz81WNV-iTTFI1fEDFBtg9T95yQ1BC3lcFcNUvpybMjjPbA61su4TbrltyotPRQQbQH5X-4L79Ezn8tAszM9lyaNn8cd33kdEBzcWEJgPDpoL5alx2Sr6O8Jzlz1iVg0xnvJrJYAzjav1EFRJeq9YvFi2dwNsIsRMhj6HJA5fg",
	},
	{
		id: 3,
		name: "Clube de Leitura",
		members: "10 membros",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuC0NfJ6xSvDCJXP_OByWeHZsgJJSJWqzOtCgv9P-cv1IyFyu6u9tHLuXsCoR4jxXX1KocUmE8NVzlzfrHymECd1rYa2TWVJC_BzOiKhYz685cYkwq-Quhk7tW-KrtDa4cQvpOUjFSM7yq1-lwEdzjOmnPBHBA6scYGARNwbUZv2u1AU3whoNZEvh__Pv0RIG-mFRehh2SXxaB-fWdklWGBBwM0lEEEPKb2nAUfjcWyq8tU5bqX1HI_GYmejSdZZonsBmpD6pRHflg",
	},
]

const suggestedGroups = [
	{
		id: 4,
		name: "Grupo de Debates",
		members: "12 membros",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCz_fKcS6B4QOZVvaMXPG6OHQWdChHjV0EWym_SGlRCplLbL6AEhnshhTGoLM0IeCFesyqg6JNepszDUzlWUuhEyFbR9qva3V_LfbQaIPr7WDgMHBgkYfb5403N93O9FX4vx3ngnhHMb2B5crT1YcDgC0ofG6C_9r8mbmULmuVPTas-_4KMq2QRCbQwDJqXtpl8oyyYFgUKl6XVgWYqVB2RiIsuUNO7BbDI1uVKhAgVIcRO_zTAPnu_YcmhXP7LAXhpbj1vOSrfIA",
	},
	{
		id: 5,
		name: "Workshop de Design",
		members: "18 participantes",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDKge1u_r1iblThcj6m3yYvyHZ4zf8gvEDXg6VKMjL1xmhgwl86g3olpkKwbYIyAEniv7p8WkdNbuaXsSpr1q5nJEvR5Jp1mr_hEszJSJmqqdjgPIpqxUStoE1nsw5xlOjN4NwX2mP4BDKh7EbiW-VsQIAUctLNbD7-6fGhClRnpkDa7o6Fyw3kQgeWTg6N6z0BZxjmHwFtQpoDrQf9Wp2uNOSDJ-X21r0B1gMYuf940EA7E-k81lPWsz4NZ27uWiSYRbcsZdxjDw",
	},
	{
		id: 6,
		name: "Grupo de Corrida",
		members: "8 membros",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuA3r0uadZl3PFi1eHb6NW-V1PpQcBMgVEUjnGWtkuKsnAafRgDwbwFciFXzee0yauPPVu4WWawwEb42BPF0vWLguzCmwCcRgJlHRn_Ff7WtdjX9NwMoyZ2yCxOdGN7QAuCK0jP6UBXJPl3RKA7O_uy0ksJd0n3nBf9N9D4YDvUD9F95G6d5KLuYRXD8pB8NkJwqLEC1vbEqT6akMF7tdWg-ubOHv1g7Rr54xaAwjWOeolHTwceDfWPGOmzeBhcDpXkdiJyHY-2B8g",
	},
]

// Componente do Header
const Header = ({ searchTerm, onSearchChange }) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	return (
		<div className="flex items-center bg-[#111811] p-4 pb-2 justify-between">
			<h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
				Eventos e Grupos
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
						placeholder="Buscar grupos..."
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						className="w-full px-3 py-2 border border-[#9db89d] rounded-md focus:outline-none focus:ring-2 focus:ring-[#19e519] focus:border-transparent bg-[#111811] text-white placeholder:text-[#9db89d]"
						autoFocus
					/>
				</div>
			)}
		</div>
	)
}

// Componente do Card de Grupo
interface GroupCardProps {
	name: string
	members: string
	image: string
}

const GroupCard: React.FC<GroupCardProps> = ({ name, members, image }) => {
	return (
		<div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
			<div
				className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
				style={{ backgroundImage: `url("${image}")` }}
			/>
			<div>
				<p className="text-white text-base font-medium leading-normal">
					{name}
				</p>
				<p className="text-[#9db89d] text-sm font-normal leading-normal">
					{members}
				</p>
			</div>
		</div>
	)
}

// Componente da Seção de Grupos
interface GroupSectionProps {
	title: string
	groups: Array<{
		id: number
		name: string
		members: string
		image: string
	}>
}

const GroupSection: React.FC<GroupSectionProps> = ({ title, groups }) => {
	return (
		<>
			<h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
				{title}
			</h2>
			<div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				<div className="flex items-stretch p-4 gap-3">
					{groups.map((group) => (
						<GroupCard
							key={group.id}
							name={group.name}
							members={group.members}
							image={group.image}
						/>
					))}
				</div>
			</div>
		</>
	)
}

// Componente do Item de Navegação
interface NavItemProps {
	icon: React.ReactNode
	label: string
	isActive?: boolean
	href: string
}

const NavItem: React.FC<NavItemProps> = ({
	icon,
	label,
	isActive = false,
	href,
}) => {
	const textColor = isActive ? "text-[#19e519]" : "text-[#9db89d]"

	return (
		<a
			className={`just flex flex-1 flex-col items-center justify-end gap-1 ${
				isActive ? "rounded-full" : ""
			} ${textColor}`}
			href={href}
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
	)
}

// Componente da Navegação Inferior
const BottomNavigation: React.FC = () => {
	return (
		<div>
			<div className="flex gap-2 border-t border-[#293829] bg-[#111811] px-4 pb-3 pt-2">
				<NavItem
					icon={<House size={24} weight="regular" />}
					label="Início"
					href="#"
				/>
				<NavItem
					icon={<Users size={24} weight="fill" />}
					label="Comunidades"
					isActive={true}
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
				/>
			</div>
			<div className="h-5 bg-[#111811]" />
		</div>
	)
}

// Componente Principal
const Home: NextPage = () => {
	const [searchTerm, setSearchTerm] = useState("")

	const filterGroups = (groups) => {
		if (!searchTerm) return groups
		return groups.filter((group) =>
			group.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	}

	const filteredMyGroups = filterGroups(myGroups)
	const filteredSuggestedGroups = filterGroups(suggestedGroups)

	return (
		<div
			className="relative flex size-full min-h-screen flex-col bg-[#111811] justify-between group/design-root overflow-x-hidden"
			style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
		>
			<div>
				<Header
					searchTerm={searchTerm}
					onSearchChange={setSearchTerm}
				/>
				<GroupSection title="Meus Grupos/Eventos" groups={filteredMyGroups} />
				<GroupSection title="Sugeridos" groups={filteredSuggestedGroups} />
			</div>
			<BottomNavigation />
		</div>
	)
}

export default Home
