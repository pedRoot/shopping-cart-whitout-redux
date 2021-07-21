const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          //...reducers[prop]({ [prop]: acc[prop] }, action),
          ...reducers[prop](acc, action),
        })
      },
      state
    )
  }
}

export default combineReducers;