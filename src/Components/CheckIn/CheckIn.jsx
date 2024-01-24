import React, { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { RiMailAddLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { SiYourtraveldottv } from 'react-icons/si';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
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
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [entries, setEntries] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleAddEntry = () => {
    // El. pašto tikrinimas
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (date.trim() !== '' && name.trim() !== '' && phone.trim() !== '' && emailRegex.test(email.trim())) {
      setEntries([...entries, { date, name, phone, email }]);
      setDate('');
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("Įvestas el. pašto adresas netinkamo formato!");
    }
  }

  const handleRemoveEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  }

  return (
    <div className="flex-container">
      <h2>Check-In Form</h2>
        <div>
          <button className='inputBtn'><input
            type="date"
            placeholder="date"
            value={date}
            onChange={handleDateChange}
          /></button>
          
          <button className='inputBtn'><input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          /><IoMdPersonAdd /></button>
          
          <button className='inputBtn'> <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          /><MdAddCall /></button>
          
          <button className='inputBtn'><input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          /><RiMailAddLine /></button>
          
          <button className='btnAdd' onClick={handleAddEntry}><IoAddOutline /></button>
        </div>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.date},  {entry.name}, {entry.phone}, {entry.email}
            <button className='btnDel' onClick={() => handleRemoveEntry(index)}><MdDelete /></button>
          </li>
        ))}
      </ul>

      <button className='btn'>
        <Link to={{ pathname: "/submit", state: { entries } }}>
        Submit<IoCheckmarkDoneOutline className='icon' />
        </Link>  
      </button>
  </div>
  )
}

export default CheckIn;


