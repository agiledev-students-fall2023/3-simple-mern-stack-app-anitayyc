import { Link } from 'react-router-dom'
import './AboutUs.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Hello! My name is Anita Ye and I am a senior majoring in math/cs.</p>
      {/* Add your photo here */}
      <img src="/AboutUsPicture.jpeg" alt="AboutUsPicture"
      style = {{
        width: '300px',
        height: 'auto'
      }} />
    </div>
  )
}

// make this component available to be imported into any other file
export default AboutUs
