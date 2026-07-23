import React from 'react'
import style from './SavedLinks.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'
import { type LinkInput } from '../FormLinks/FormLinks'


interface SavedLinksProps{
  links: LinkInput[];
}


export const SavedLinks = ({links}: SavedLinksProps) => {
 
  return (
    <div className= {style.card}>
       <Search/>
     
      <Text variant='h5' style={{color:" black", fontSize:30}}>Saved Links</Text>
      <div className= {style.content}>
      {links.length === 0 ?(
        <p className= {style.note}>Nothing saved yet</p>
      ):(
        <ul className= {style.list}>
           {links.map((link) => (
            <li key={link.id } className={style.listItem}>
              {link.title && <h4 className={style.linkTitle}>{link.title}</h4>}
              {link.link && (
                <a href={link.link}  className={style.linkUrl}>
                  {link.link}
                </a>
              )}
              {link.description && <p className={style.linkDesc}>{link.description}</p>}
              {link.tag && <span className={style.linkTag}>{link.tag}</span>}
            <button type="submit">View</button>
            <button type="submit">Update</button>
            <button type="submit">delete</button>
            
            </li>
          ))}
          
        </ul>
       
      )
      
      } </div>
        

    


      

    </div>
  )
}
