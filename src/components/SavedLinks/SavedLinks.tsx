import { useState } from 'react';
import style from './SavedLinks.module.css'
import { Text } from '../Text/Text'
import { Search } from '../Search/Search'
import { type LinkInput } from '../FormLinks/FormLinks'


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
                <input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} placeholder="Title" />
                <input value={draft.link} onChange={(e) => setDraft({ ...draft, link: e.target.value })} placeholder="Link" />
                <textarea value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} placeholder="Description" />
                <input value={draft.tag} onChange={(e) => setDraft({ ...draft, tag: e.target.value })} placeholder="Tag" />
                <div>
                  <button type="button" onClick={() => onUpdate(link.id, draft)}>Save</button>
                  <button type="button" onClick={onCancelEdit}>Cancel</button>
                </div>
              </li>
            ) : (
              <li key={link.id} className={style.listItem}>
                {link.title && <h4 className={style.linkTitle}>{link.title}</h4>}
                {link.link && <a href={link.link} className={style.linkUrl}>{link.link}</a>}
                {link.description && <p className={style.linkDesc}>{link.description}</p>}
                {link.tag && <span className={style.linkTag}>{link.tag}</span>}
                <br />
                <button type="button" onClick={() => startEdit(link)}>Update</button>
                <button type="button" onClick={() => onDelete && onDelete(link.id)}>Delete</button>
              </li>
          ))}
          
        </ul>
       
      )
      } 
        
    </div>
  )
}
