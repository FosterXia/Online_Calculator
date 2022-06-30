import ACTIONS from "./action";

const reducer = (state = {
    currentOperand : '0',
    lastOperand : '',
    operation : '',
    needClear : false
}, action) => {
    switch(action.type) {
        case ACTIONS.ADD_DIGIT:
            let tmp = state.currentOperand;
            if (state.needClear)    {tmp = '';}
            if (state.currentOperand === '0' && action.value === '0')   return state;
            if (state.currentOperand === '0' && action.value !== '0' && action.value !== '.')   return {...state, currentOperand : action.value, needClear : false};
            if (state.currentOperand.includes('.') && action.value === '.') return state;
            
            return {
                ...state,
                currentOperand : tmp + action.value,
                needClear : false
            };
        case ACTIONS.DELETE_DIGIT:
            let res = state.currentOperand;
            if (res.length !== 0 && res !== '0')   res = res.substring(0, res.length - 1);
            if (res.length === 0)   res = '0';
            return {
                ...state,
                currentOperand : res
            };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.needClear) {
                if (action.operation === 'x^y') return {...state, operation : '^', lastOperand : state.currentOperand, needClear : true};
                return {
                    ...state,
                    operation : action.operation
                };
            }
            if (action.operation === 'x^y') return {...state, operation : '^', lastOperand : state.currentOperand, needClear : true};
            if (state.operation !== '') {
                let x = Number(state.lastOperand);
                let y = Number(state.currentOperand);
                let res = 0;
                if (state.operation === '+') {res = x + y;}
                if (state.operation === '-') {res = x - y;}
                if (state.operation === '×') {res = x * y;}
                if (state.operation === '÷') {res = x / y;}
                if (state.operation === '^') {res = x ** y;}
                return {
                    currentOperand : '' + res,
                    lastOperand : '' + res,
                    operation : action.operation,
                    needClear : true
                };
            }
            return {
                ...state,
                lastOperand : state.currentOperand,
                operation : action.operation,
                needClear : true
            };
        case ACTIONS.CLEAR:
            return {
                currentOperand : '0',
                lastOperand : '',
                operation : '',
                needClear : false
            };
        case ACTIONS.EVALUATE:
            if (state.operation === '') return {...state, lastOperand : state.currentOperand};
            let x = Number(state.lastOperand);
            let y = Number(state.currentOperand);
            let ans = 0;
            if (state.operation === '+')    {ans = x + y;}
            if (state.operation === '-')    {ans = x - y;}
            if (state.operation === '×')    {ans = x * y;}
            if (state.operation === '÷')    {ans = x / y;}
            if (state.operation === '^')    {ans = x ** y;}
            
            return {
                currentOperand : '' + ans,
                lastOperand : '' + ans,
                operation : '',
                needClear : true
            };
        default:
            return state;
    }
}

export default reducer;
