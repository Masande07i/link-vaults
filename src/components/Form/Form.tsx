import { useState, useEffect } from 'react'
import { FormLink, type LinkInput } from '../FormLinks/FormLinks'
import { SavedLinks } from '../SavedLinks/SavedLinks'
import style from './Form.module.css'




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
    const updatedLinks = links.map((link) => (link.id === id ? { ...link, ...changes } : link))
    localStorage.setItem('savedLinks', JSON.stringify(updatedLinks));
    setLinks(updatedLinks);
    setEditingId(null);
  };

  const handleDelete = (id: string | number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
     <main className={style.container}>
      {view === 'add' ? (
        <>
          <FormLink onAdd={addNewLink} onViewLinks={() => setView('saved')}/>
          
        </>

      ) : (
        <>
          <SavedLinks
            links={links}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            editingId={editingId}
            onAddLink={() => setView("add")}
            onStartEdit={setEditingId}
            onCancelEdit={() => setEditingId(null)}
          />
          
        </>
      )}
    </main>
  )
}