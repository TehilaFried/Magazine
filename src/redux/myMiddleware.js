const { default: pupils } = require("./reducer/pupils")

const myMiddleware = store => next => action => {
    if (action.type === 'ADD_PUPIL') {
        let arr = []
        let i;
        for ( i = 0; store.getState().pupils.pupils[i]; i++)
            arr[i] = store.getState().pupils.pupils[i].name
        alert('hello your teacher is: ' + (store.getState().teacher.teacher.name)
            + ', the pupils in the class: ' +(arr)+','+(action.payload.name)
        )
        next(action)
    }
    else
        next(action)
}
const myMiddleware2 = store => next => action => {
    console.log(action)
    next(action)
}

module.exports = { myMiddleware, myMiddleware2 };
