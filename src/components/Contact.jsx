
import React, { useState, useEffect } from 'react';
import style from '../css_modules/contact.module.css';
import { base_url } from '../utils/constants';

const Contact = () => {
  const [openingContact, setOpeningContact] = useState({
    "firstName": firstName.value.trim(),
      "lastName": lastName.value.trim(),
      "planetName": planetName.value.trim()
  });
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/v1/planets`)
      .then(res => res.json())
      .then(data => setPlanets(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOpeningContact({ ...openingContact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${base_url}/v1/planets`, {
      method: 'POST',
      body: JSON.stringify(openingContact),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setOpeningContact(data.name))
      .catch(error => console.error('Ошибка:', error));
  };

  return (
    <div className={style.farGalaxy}>
      {openingContact}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstName" placeholder="Your name.." onChange={handleInputChange} value={openingContact.firstName} />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastName" placeholder="Your last name.." onChange={handleInputChange} value={openingContact.lastName} />

          <label>Planet</label>
          <select id="planet" name="planetName" onChange={handleInputChange} value={openingContact.planetName}>
            {planets.map(planet => (
              <option key={planet.id} value={planet.name}>{planet.name}</option>
            ))}
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;