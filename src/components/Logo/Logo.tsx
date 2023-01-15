import logo from '@/assets/logo-white.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} width='80' height='80' alt='logo' />
    </Link>
  )
}
