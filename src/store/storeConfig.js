import {createStore, combineReducers} from 'redux'


const reducers = combineReducers(
    {
        numeros: function(state, action){
            console.log('Reducer Numeros')
            console.log(state, '', action)
            return {
                min: 1,
                max: 10
            }
        }
    }
)

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig