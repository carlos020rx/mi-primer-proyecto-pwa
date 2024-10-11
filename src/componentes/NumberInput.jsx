import React, { useState } from 'react'
import PropTypes from "prop-types"
import Resultado from './Resultado';
import { operaciones } from '../helperst/operaciones';

export const NumberInput = () => {
    const [numeros,setNumeros]=useState({
        numero1:0,
        numero2:0
    });
    const {handleChange,suma,resta,multi,numero1,numero2}= operaciones(numeros,setNumeros);

    return (
        <>
            <label htmlFor='"'>numero 1:
                <input name='numero1' value={numero1} onChange={handleChange} type='number' />
            </label>
            <label htmlFor='"'>numero 2:
                <input name='numero2' value={numero2} onChange={handleChange} type='number' />
            </label>
            <Resultado operaciones={suma} calculo={suma()}/>
            <Resultado operaciones={resta} calculo={resta()}/>
            <Resultado operaciones={multi} calculo={multi()}/>
            <h2></h2>
        </>
    )
}

Resultado.NumberInput = {
    name: PropTypes.string,
};


export default NumberInput