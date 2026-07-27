import { useState, useEffect } from 'react'
import { FormLink, type LinkInput } from '../FormLinks/FormLinks'
import { SavedLinks } from '../SavedLinks/SavedLinks'
import style from './Form.module.css'
import {Button}from '../Button/Button'



export const Form = () => {
  const [links, setLinks] = useState<LinkInput[]>(() => {
    const saved = localStorage.getItem('savedLinks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse links from localStorage", e);
      }
    }
    return [];
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [view, setView] = useState<'add' | 'saved'>('saved');

  useEffect(() => {
    localStorage.setItem('savedLinks', JSON.stringify(links));
  }, [links]);

  const addNewLink = (input: Omit<LinkInput, 'id'>) => {
    const newLink: LinkInput = { id: crypto.randomUUID(), ...input };
    setLinks((prev) => [newLink, ...prev]);
    setView('saved');
  };

  const handleUpdate = (id: string, changes: Omit<LinkInput, 'id'>) => {
    setLinks((prev) => prev.map((link) => (link.id === id ? { ...link, ...changes } : link)));
    setEditingId(null);
  };

  const handleDelete = (id: string | number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div>
      {view === 'add' ? (
        <>
          <FormLink onAdd={addNewLink} />
         <Button label={'View Links'} onClick={() => setView('saved')} className={style.buttonView}/>
         
        </>
      ) : (
        <>
          <SavedLinks
            links={links}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            editingId={editingId}
            onStartEdit={setEditingId}
            onCancelEdit={() => setEditingId(null)}
          />
          
           <Button label={'Add a Link'} onClick={() => setView('add')} className={style.buttonView}/>
         
        </>
      )}
    </div>
  )
}