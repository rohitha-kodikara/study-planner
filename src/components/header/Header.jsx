import React from 'react'
import {
} from 'lucide-react'
import Logo from './Logo'
import WeekMover from './WeekMover'

const Header = () => {
  return (
    <header className="mb-[21px] flex items-center justify-between gap-4">
         <Logo />
        <WeekMover />
        </header>
  )
}

export default Header
