import { InputTS } from '../../types/Input'
import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { useState } from 'react'
import useDebounce from './useDebounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const delay = 500

export const Input = ({value, search}: InputTS) => {
    const { state } = useForm()

    const [input, setInput] = useState('')
    
    const deboucedChange = useDebounce(search, delay)

    const handleChange = (e: string) => {
        deboucedChange(e)
        setInput(e)
    }

    return (
        <C.InputArea theme={state.theme}>
         <div>
            <button className='icon bgchange'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
            <input
                type="text"
                placeholder="Search By Country"
                value={input}
                onChange={e => handleChange(e.target.value)}
            />
        </div>

             <div className='sel'>
                <select value="Filter by Region" onChange={e => handleChange(e.target.value)}>
                    <option disabled selected>Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select><span>&#709; </span> 
            </div>       
            
        </C.InputArea>
    )
}