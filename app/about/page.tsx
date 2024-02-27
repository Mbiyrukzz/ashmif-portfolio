import React from 'react'
import MainAbout from './MainAbout'
import OurStory from './OurStory'
import MeetOurTeam from './MeetOurTeam'
import OurClients from './OurClients'

const AboutUsPage = () => {
  return (
    <div className="justify-between">
      <MainAbout />
      <OurStory />
      <MeetOurTeam />
      <OurClients />
    </div>
  )
}

export default AboutUsPage
