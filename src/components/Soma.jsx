import React from 'react';
import { connect } from 'react-redux'

import Card from './Card'


function Soma(props) {
    const { min, max } = props
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    Resultado:
                </span>
                <strong>
                    {max + min}
                </strong>
            </div>
        </Card>
    )
}

//mapeando algo q está no estado para propriedade do meu componente (via props)
function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Soma) //primeiro parametro dps resultado