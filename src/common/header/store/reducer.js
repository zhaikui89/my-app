const defaultState = {
    focused: false,
}
export default (state = defaultState, action) => {
    if (action.type === 'search-focused') {
        return {
            focused: true
        }
    }
    if (action.type === 'blur-focused') {
        return {
            focused: false
        }
    }
    return state
}