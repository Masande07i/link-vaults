import { useState } from 'react';
import style from './SavedLinks.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'
import { type LinkInput } from '../FormLinks/FormLinks'
import { Button } from '../Button/Button';


interface SavedLinksProps{
  links: LinkInput[];
  onDelete ?: (id: string) => void
  onUpdate: (id: string, changes: Omit<LinkInput, 'id'>) => void;
  editingId: string | null;
  onStartEdit: (id: string) => void;
  onCancelEdit: () => void;
}

export const SavedLinks = ({links, onDelete,onUpdate,editingId, onStartEdit, onCancelEdit}: SavedLinksProps) => {
  
 const [draft, setDraft] = useState<Omit<LinkInput, 'id'>>({ title: '', link: '', description: '', tag: '' });
  
 function startEdit(link: LinkInput) {
    setDraft({ title: link.title, link: link.link, description: link.description, tag: link.tag ?? '' });
    onStartEdit(link.id);
  }

 return (
    <div className= {style.card}>
       <Search/>
     
      <Text variant='h5' style={{color:" black", fontSize:30}}>Saved Links</Text>
      
      {links.length === 0 ? (
        <p className= {style.note}>Nothing saved yet</p>
      ):(
        <ul className= {style.list}>
          {links.map((link) =>
            editingId === link.id ? (
              <li key={link.id} className={style.listItem}>
                <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })}  />
                <input value={draft.link} onChange={(e) => setDraft({ ...draft, link: e.target.value })} />
                <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
                <input value={draft.tag} onChange={(e) => setDraft({ ...draft, tag: e.target.value })} />
                
                <div className= {style.buttons}>
                  <Button label={'Save'} onClick={() => onUpdate(link.id, draft)} style={{backgroundColor: "#16a34a"}}/>
                  <Button label={'Cancel'} onClick={onCancelEdit} style={{backgroundColor:"#6b7280"}}/> 
                </div>
              </li>
            ) : (
              <li key={link.id} className={style.listItem}>
                {link.title && <h1 className={style.linkTitle}>{link.title}</h1>}
                {link.link && <a href={link.link} className={style.linkUrl}>{link.link}</a>}
                {link.description && <h4 className={style.linkDesc}>{link.description}</h4>}
                {link.tag && <span className={style.linkTag}>{link.tag}</span>}
                <br />
               <div className={style.buttons}>
                <Button label={'Update'} onClick={() => startEdit(link)} style={{backgroundColor: "#2563eb"}}/> 
                <Button label={'Delete'} onClick={() => onDelete && onDelete(link.id)} style={{backgroundColor: "#ef4444"}}/> 
               </div>
              </li>
          ))}
          
        </ul>
       
      )
      } 
        
    </div>
  )
}
