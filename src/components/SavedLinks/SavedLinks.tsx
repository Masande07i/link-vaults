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
  onAddLink: () => void;
  onStartEdit: (id: string) => void;
  onCancelEdit: () => void;

}

export const SavedLinks = ({links, onDelete,onUpdate,editingId, onStartEdit, onCancelEdit, onAddLink}: SavedLinksProps) => {
 const [searchQuery, setSearchQuery] = useState<string>('')
 const [draft, setDraft] = useState<Omit<LinkInput, 'id'>>({ title: '', link: '', description: '', tag: '' });
 const filteredResults = links.filter((link)=>{
  return (
    link.title.includes(searchQuery)|| 
    link.description.includes(searchQuery)|| 
    link.link.includes(searchQuery)|| 
    (link.tag?.includes(searchQuery) || false)
  );
 })

 const onSearch=(newValue: string)=>{
  setSearchQuery(newValue)
 }
  
 function startEdit(link: LinkInput) {
    setDraft({ title: link.title, link: link.link, description: link.description, tag: link.tag ?? '' });
    onStartEdit(link.id);
  }

 return (
     <section className={style.page}>

     <div className={style.toolbar}>
      <Text variant="h2" > Saved Links </Text>

      <Button label="+ Add Link" onClick={onAddLink} className={style.addButton}
      />
    </div>
       <Search searchQuery={searchQuery} onSearch={onSearch}/>
     
      {links.length === 0 ? (
        <p className= {style.note}>Nothing saved yet</p>
      ):(
        <ul className= {style.list}>
          {filteredResults.map((link) =>
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
                {link.title && <h3 className={style.linkTitle}>{link.title}</h3>}
                {link.link && <a href={link.link} className={style.linkUrl}>{link.link}</a>}
                {link.description && <p className={style.linkDesc}>{link.description}</p>}
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
        
    </section>
  )
}
