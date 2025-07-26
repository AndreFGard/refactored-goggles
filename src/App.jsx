import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import icons from different icon sets
import { FaHeart, FaGithub, FaReact } from 'react-icons/fa'
import { MdSettings, MdHome, MdSearch } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import {TagAddition} from './pages/tag-addition.jsx'

function App() {
  return <TagAddition />
}

export default App
