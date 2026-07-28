
import { FaSearch } from 'react-icons/fa'
import { Text } from '../Text/Text'
import style from './Search.module.css'

export interface SearchBarProps{
  searchQuery : string
  onSearch : (newValue: string)=> void

}

export const Searchbar: React.FC<SearchBarProps> = ({searchQuery, onSearch}) => {
  
  return (

    <div>
       <Text variant= {'span'} style={{color: 'rgb(20,20,20)', padding: '10px'}}>Search</Text>
        <input type = 'text' className ={style.input} value={searchQuery} onChange={(e)=> {
          onSearch(e.target.value)

        }} />
        <FaSearch  className= {style.icon}/>
    </div>
    
  )
}
