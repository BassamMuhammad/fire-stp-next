import { Header } from '../components/utils/Header'
import { Login } from '../components/vitals/Login'
import { InfoModal } from '../components/utils/InfoModal'
import { Landing } from '../components/sections/Landing'

function Home() {
  return (
    <>
      <Header login="true" />
      <InfoModal modalId="login-form" modalTitle="Access to the course">
        <Login />
      </InfoModal>
      <Landing />
    </>
  )
}

export default Home