export const createIncrementAction = (data) => ({
  type: 'increment',
  data
})

export const createDecrementAction = (data) => {
  return {
    type: 'decrement',
    data
  }
}