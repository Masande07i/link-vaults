
import { useState } from 'react';
import style from './Form.module.css'
import { Text } from '../Text';


export const Form = () => {

  return (
    <section className= {style.slate}>

        <Text variant= "h2"> Add a new link</Text>
   
     <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
         />
     </div>

     <div>
         <label htmlFor="link">Link:</label>
        <input
          type="url"
          id="link"
          name="link"
          />
     </div>

     <div>
         <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          />
     </div>

     <div>
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          name="tag"
        />
     </div>

      <button type="submit">Add Link</button>

   </section>
    
  )
}
