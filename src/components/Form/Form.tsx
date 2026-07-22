import React from 'react'
import { FormLink, type LinkInput } from '../FormLinks/FormLinks'
import { SavedLinks } from '../SavedLinks/SavedLinks'



export const Form = () => {
    const addNewLink = (input: LinkInput ) =>{
        console.log(input);
    };

  return (
    <div>
       <FormLink onAdd={addNewLink}></FormLink>
       <SavedLinks></SavedLinks>
    </div>
  )
}
