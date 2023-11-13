import { useState } from 'react';
import { POST } from '../../composables/server';
import Brand from '../../types/Brand';
import { useNavigate } from 'react-router-dom';

export default function SendMessage() {
  const navigate = useNavigate()
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
        navigate('/admin/brands')
      }
    }
    catch (error) {
      alert("error")
    }
  }


  return (
    <div className='brand-wrapper'>
      <h1>Ajouter une marque</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom de la marque
          <input type='text' name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label htmlFor="name">
          Url de l'image de la marque
          <input type='text' name="logoUrl" value={formData.logoUrl} onChange={handleChange}/>
        </label>

        <input type='submit' className='button' value='Submit' />
    </form>
    </div>
  )
}