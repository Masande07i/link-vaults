import style from './FormLinks.module.css'
import { Text } from '../Text/Text';
import  React ,{ useState } from 'react';

export interface LinkInput{
  id: number;
  title : string;
  link: string;
  description: string;
  tag ?: string;
}

interface FormLinkProps{
  onAdd: (input : Omit<LinkInput,'id'>) => void;
}

export function FormLink( {onAdd}: FormLinkProps) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   onAdd({ title, link, description, tag });

    setTitle('');
    setLink('');
    setDescription('');
    setTag('');

};
 
  return (
    <section className= {style.slate}>

        <Text variant= "h2"> Add a new link</Text>
        <form onSubmit={handleSubmit}>
   
     <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
         />
     </div>

     <div>
         <label htmlFor="link">Link:</label>
        <input
          type="url"
          id="link"
          name="link"
          placeholder= " url"
          onChange={(e) => setLink(e.target.value)}
          />
     </div>

     <div>
         <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder= "text"
          onChange={(e) => setDescription(e.target.value)}
          />
     </div>

     <div>
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          name="tag"
          placeholder= " Enter tag"
          onChange={(e) => setTag(e.target.value)}
        />
     </div>

      <button type="submit">Add Link</button>
      </form>

   </section>
    
  )
}

