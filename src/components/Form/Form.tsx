import React, {useState} from 'react'
import { FormLink, type LinkInput } from '../FormLinks/FormLinks'
import { SavedLinks } from '../SavedLinks/SavedLinks'



export const Form = () => {
   const [links, setLinks] = useState<LinkInput[]>([]);
   
  const addNewLink = (input: Omit<LinkInput,'id'>) => {
    const newLink: LinkInput = { id: Date.now(), ...input };
    setLinks((prevLinks) => [...prevLinks, newLink]);
  };
   
  return (
    <div>
       <FormLink onAdd={addNewLink}/>
       <SavedLinks links={links}/>
    </div>
  )
}
