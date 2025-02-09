import React from 'react'
import TimePicker from "@/components/TimePicker";
import { areCookiesMutableInCurrentPhase } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
const Header = () => {
  return (
    <div className='header-container'>
        <TimePicker ></TimePicker>
    </div>
  )
}

export default Header