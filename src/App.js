import React, { useCallback, useMemo, useState } from 'react'

import Counter from './Counter'

export default function App() {
  const [value, setValue] = useState('')
  const [newValue, setNewValue] = useState('')

  const addHello = useCallback(() => setValue(value + 'Hello!'), [value])
  const myObject = useMemo(() => ({ key: 'myObj' }), [])

  return (
    <div>
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <input
        type="text"
        onChange={e => setNewValue(e.target.value)}
        value={newValue}
      />
      <Counter addHello={addHello} myObject={myObject} />
    </div>
  )
}
