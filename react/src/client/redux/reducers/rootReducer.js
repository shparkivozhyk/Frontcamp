 const rootReducer = (state = [], action) => {
        switch (action.type) {
            case 'CLICK': 
                console.log('CLICK!!!');
                return state;
            default: return state;
        }
    };


export default rootReducer;