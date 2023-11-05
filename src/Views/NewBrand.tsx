import React, { useState } from 'react';
import '../styles/todoItem.scss'
import { POST } from '../composables/server';
import Brand from '../types/Brand';

export default function SendMessage() {
  const [formData, setFormData] = useState({
    name: '',
    logoUrl: ''
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const response = await POST<Brand>('brand', formData as Brand)
      if(response)
      {
        setFormData({
          name: '',
          logoUrl: ''
        })
      }
    }
    catch (error) {
      alert("error")
    }
  }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom du produit
          <input type='text' name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label htmlFor="name">
          Url de l'image du produit
          <input type='text' name="logoUrl" value={formData.logoUrl} onChange={handleChange}/>
        </label>

        <input type='submit' className='button' value='Submit' />
    </form>
  )
}