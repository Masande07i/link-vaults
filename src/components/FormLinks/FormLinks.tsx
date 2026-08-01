import style from './FormLinks.module.css'
import { Text } from '../Text/Text'
import  React ,{ useState } from 'react'
import { Button } from '../Button/Button'


export interface LinkInput{
  id: string;
  title : string;
  link: string;
  description: string;
  tag ?: string;
}

interface FormLinkProps{
  onAdd: (input : Omit<LinkInput,'id'>) => void;
  onViewLinks: () => void;
}

export function FormLink( {onAdd, onViewLinks}: FormLinkProps) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   if(validate()){
    
   onAdd({ title, link, description, tag });

    setTitle('');
    setLink('');
    setDescription('');
    setTag('');
   }

};

const validate = () : boolean =>{
  

  if(!title.trim()){
   alert( "Please insert title!")
    return false;
  }
  if(!link.trim()){
   alert( "Please insert Url!")
    return false;
  }
  if(!description.trim()){
    alert( "Please insert description!")
    return false;
  }
  return true;
}

 
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
          placeholder="Enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}

        
         />
     </div>

     <div>
         <label htmlFor="link">Link:</label>
        <input
          type="url"
          id="link"
          name="link"
          placeholder= "Enter a URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          />
     </div>

     <div>
         <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder= "Enter a description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
     </div>

     <div>
        <label htmlFor="tag">Tag:</label>
        <input
          type="text"
          id="tag"
          name="tag"
          placeholder= "Enter a tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
     </div>

      <div className={style.actions}>
       <Button label="Save Link" type="submit" className={style.buttonAdd}/>

       <Button label="View Links" type="button" onClick={onViewLinks} className={style.buttonView}/>
      </div>
    </form>
    
   </section>
    
  )
}

