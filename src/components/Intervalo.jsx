import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { alterarNumeroMinimo } from '../store/actions/numeros';




function Intervalo(props) {
    const { min, max } = props;
    props.alterarMinimo(10000);


    return (
        <Card title="Intervalo de Número" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly />
                </span>
            </div>
        </Card>
    );
}

//mapeando algo q está no estado para propriedade do meu componente (via props)
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

function mapActionCreatorsToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            //action creator q retorna uma action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    };
}

export default connect(
    mapStateToProps,
    mapActionCreatorsToProps
)(Intervalo) //primeiro parametro dps resultado