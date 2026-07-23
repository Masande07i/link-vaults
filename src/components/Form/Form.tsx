import  {useState} from 'react'
import { FormLink, type LinkInput } from '../FormLinks/FormLinks'
import { SavedLinks } from '../SavedLinks/SavedLinks'



export const Form = () => {
   const [links, setLinks] = useState<LinkInput[]>([]);
   
  const addNewLink = (input: Omit<LinkInput,'id'>) => {
    const newLink: LinkInput = { id: Date.now(), ...input };
    setLinks((prevLinks) => [...prevLinks, newLink]);
  };

const handleUpdate = () =>{
  

}

const handleDelete = (id: string | number) => {
  
  setLinks(links.filter(link => link.id !== id));
}
   
  return (
    <div>
       <FormLink onAdd={addNewLink}/>
       <SavedLinks links={links} 
       onDelete={handleDelete} 
       onUpdate={handleUpdate}/>
    </div>
  )
}
