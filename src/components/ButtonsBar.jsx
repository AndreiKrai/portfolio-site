import { IconButton } from '@mui/material'
import React from 'react'
import LinkedinIcon from './LinkedinIcon.tsx'

export default function ButtonsBar({socialLinks}) {
  return (<>
    {socialLinks.map((social) => (
        <IconButton
          key={social.label}
          size="large"
          edge="start"
          color="inherit"
          aria-label={`open ${social.label}`}
          onClick={social.onClick}
          sx={social.sx}
        >
          {social.icon}
        </IconButton>
      ))}
    
      </>

)
}
