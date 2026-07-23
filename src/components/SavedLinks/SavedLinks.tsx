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
      {links.length === 0 ?(
        <p className= {style.note}>Nothing saved yet</p>
      ):(
        <ul className= {style.list}>
           {links.map((link) => (
            <li key={link.id } className={style.listItem}>
               {link.title && <h4 className={style.linkTitle}>{link.title}</h4>}
              
              {link.link && (
                <a href={link.link} target="_blank" rel="noreferrer" className={style.linkUrl}>
                  {link.link}
                </a>
              )}
              
              {link.description && <p className={style.linkDesc}>{link.description}</p>}
              
              {link.tag && <span className={style.linkTag}>{link.tag}</span>}
            
          
             
            </li>
          ))}
        </ul>
      )
      }
      

    </div>
  )
}
