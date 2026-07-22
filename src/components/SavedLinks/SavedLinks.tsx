import React from 'react'
import style from './SavedLinks.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'

export const SavedLinks = () => {
  return (
    <div className= {style.card}>
       <Search/>
      <Text variant='h5' style={{color:" black", fontSize:30}}>Saved Links</Text>

      


    </div>
  )
}
