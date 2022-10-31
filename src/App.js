import { examples } from './examples'
import { useState } from 'react'

function App() {
  //記錄選中的索引值，資料為數字資料類型
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        // 注意要轉資料類型，保持state資料類型一致
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        )
      })}
    </select>
  )

  // 動態元件語法，注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component

  return (
    <>
      {selection}
      <p>元件檔案路徑: {examples[displayIndex].path}</p>
      <hr />
      <MyComponent />
    </>
  )
}

export default App