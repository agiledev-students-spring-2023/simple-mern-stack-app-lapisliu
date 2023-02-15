import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './AboutMe.css'
import Messages from './Messages'
import { useState, useEffect } from 'react'
import MessageStandalone from './MessageStandalone'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import loadingIcon from './loading.gif'

const AboutMe = props => {
    const [AboutMeData, setAboutMeData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {

        fetchAboutMeData()

      }, [])
    const fetchAboutMeData = () => {
        // setMessages([])
        // setLoaded(false)
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutme`)
          .then(response => {
            // axios bundles up all response data in response.data property

            setAboutMeData(response.data)

          })
          .catch(err => {
            setError(err)
          })
          .finally(() => {
            // the response has been received, so remove the loading icon
            setLoaded(true)
          })
      }

    return (

      <>

        <h1>About Me</h1>
        {AboutMeData.map(AboutMeData => 
          <img src={AboutMeData.imageUrl} className="aboutMeImage"></img>
          )}
        <h2>{AboutMeData.map(AboutMeData => AboutMeData.name)}</h2>

        <p>{AboutMeData.map(AboutMeData => AboutMeData.desc)}</p>

      </>
    )
  }
export default AboutMe