import React, { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { RiMailAddLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { SiYourtraveldottv } from 'react-icons/si';
import { Link } from 'react-router-dom';

const CheckIn = () => {
  return (
    <section className='container'>
      <div className='travelLogo'>
        <Link to="/" className='logo'>
          <h1><SiYourtraveldottv />Travel</h1>
        </Link>
      </div>
      <CheckInForm />
    </section>
  )
}

const CheckInForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [entries, setEntries] = useState([])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleAddEntry = () => {
    // El. pašto tikrinimas
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.trim() !== '' && phone.trim() !== '' && emailRegex.test(email.trim())) {
      setEntries([...entries, { name, phone, email }])
      setName('')
      setPhone('')
      setEmail('')
    } else {
      alert('Įvestas el. pašto adresas netinkamo formato!')
    }
  }

  const handleRemoveEntry = (index) => {
    const updatedEntries = [...entries]
    updatedEntries.splice(index, 1)
    setEntries(updatedEntries)
  }

  return (
    <div className="flex-container">
      <h2>Check-In Form</h2>
      <div>
        <IoMdPersonAdd />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <MdAddCall />
        <input
          type="number"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <RiMailAddLine />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleAddEntry}><IoAddOutline /></button>
      </div>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.name}, {entry.phone}, {entry.email}
            <button onClick={() => handleRemoveEntry(index)}><MdDelete /></button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CheckIn

