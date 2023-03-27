import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { themeActions } from '../../contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const { state, dispatch } = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    
    return (
        <C.Header theme={state.theme}>
            <div className='container'>
                <h1>Where In the World?</h1>
                <p onClick={handleChangeTheme}> <FontAwesomeIcon icon={faMoon} /> Dark Mode</p>
            </div>
        </C.Header>
    )
}