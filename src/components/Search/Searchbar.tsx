import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../Text/Text'
import style from './Search.module.css'

export const Searchbar = () => {
  return (

    <div>
       <Text variant= {'span'} style={{color: 'rgb(20,20,20)', padding: '10px'}}>Search</Text>
        <input type = 'text' className ={style.input} />
        <FaSearch  className= {style.icon}/>
    </div>
    
  )
}
