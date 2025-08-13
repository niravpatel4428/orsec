
import MainLayout from '../../layouts/MainLayout';
import AboutBanner from './AboutBanner';
import Subsidiary from './Subsidiary';
import ExpertTeam from './ExpertTeam';
import ContextObjectives from './ContextObjectives';
import DefenceTechnology from './DefenceTechnology';
import TeamQualified from './TeamQualified';

const AboutPage = () => {
  return (
    <MainLayout>
        <AboutBanner/>
        <Subsidiary/>
        <ExpertTeam/>
        <ContextObjectives/>
        <DefenceTechnology/>
        <TeamQualified/>
    </MainLayout>
  )
}

export default AboutPage
