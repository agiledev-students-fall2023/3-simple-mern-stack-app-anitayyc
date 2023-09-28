import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './AboutUs.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({
    about: '',
    pictureUrl: '',
  });


  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => {
        console.log('About Us Data:', data);  // Log the data
        setAboutUsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  


  //const pictureUrl = 'http://localhost:5002/AboutUsPicture.jpg';

  return (
    <div>
      <h2>About Us</h2>
      <p>{aboutUsData.about}</p>
      <img src={aboutUsData.pictureUrl} alt="About Us Picture" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

// make this component available to be imported into any other file
export default AboutUs
