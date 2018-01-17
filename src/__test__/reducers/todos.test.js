import todos_reducer from '../../reducers/todos'

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect(todos_reducer(undefined, {})).toEqual([
      {
        id: 0,
        text: 'Use Redux',
        completed: false
      }
    ])
  })

})
