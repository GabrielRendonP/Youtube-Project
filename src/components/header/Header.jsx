import PropTypes from 'prop-types'
import styles from './header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile} from 'react-icons/cg'
import { Switch } from '@material-ui/core'
import SearchBar from './SearchBar'
import { useState } from 'react'

function Header({setResultsList}) {
  const [checked, setChecked] = useState(false);
 
  const handleSwitch = () => {
    setChecked(!checked)
  }

  return (
    <nav className={styles.container}> 
      <div className={styles.innerContainer}>
        <GiHamburgerMenu style={{color: 'white', transform: 'scale(1.5)'}}/>
        <SearchBar 
          setResultsList={setResultsList}
        />
      </div>

      <div className={styles.innerContainer}>
        <Switch
          checked={checked}
          onChange={() => handleSwitch()}
        />
        <CgProfile style={{transform: 'scale(2)'}}/>
      </div>

    </nav>
  )
}

Header.propTypes = {

}

export default Header
