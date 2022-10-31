import React, { useRef, useState } from 'react'

import InputById from './InputById'
import InputByRefs from './InputByRefs'

function InputDemo() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setInputText('test@gmail.com')
        }}
      >
        載入資料
      </button>
      <hr />
      <h1>不可控表單元件(id)</h1>
      <InputById />
      <InputById />
      <hr />
      <h1>不可控表單元件(ref)</h1>
      <InputByRefs />
      <InputByRefs />
    </>
  )
}

export default InputDemo
