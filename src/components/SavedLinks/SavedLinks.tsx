
import style from './SavedLinks.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'
import { type LinkInput } from '../FormLinks/FormLinks'


interface SavedLinksProps{
  links: LinkInput[];
  onDelete ?: (id: number) => void
  onUpdate: (id: number, changes: LinkInput) => void;
}

export const SavedLinks = ({links, onDelete,onUpdate}: SavedLinksProps) => {
 
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
                <a href={link.link}  className={style.linkUrl}>
                  {link.link}
                </a>
              )}
              {link.description && <p className={style.linkDesc}>{link.description}</p>}
              {link.tag && <span className={style.linkTag}>{link.tag}</span>}
              <br/>

             {/* <button type="button" onClick={() => onUpdate?.(link.id,link.)}>Update</button> */}
            <button type="button" onClick={() => onDelete && onDelete(link.id)}>Delete</button>
            
            </li>
          ))}
          
        </ul>
       
      )
      } 
        
    </div>
  )
}
