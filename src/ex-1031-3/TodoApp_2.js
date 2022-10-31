import { useState } from 'react'

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  const [isComposition, setIsComposition] = useState(false)

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
    },
    { id: 2, text: '學react' },
  ])

  return (
    <>
      <h1>Todo待辨事項</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onCompositionStart={() => {
          setIsComposition(true)
        }}
        onCompositionEnd={() => {
          setIsComposition(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && isComposition === false) {
            // id
            // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
            // 2. id是均是數字，可求出最大值遞增
            // 3. 隨機產生函式庫 例如 uuid/nanoid 等函式庫
            const newTodo = { id: Number(new Date()), text: e.target.value }
            // 加入輸入的文字到todos陣列中
            // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
            const newTodos = [newTodo, ...todos]
            setTodos(newTodos)

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          // key值會因索引值變後會變化，不能用索引值當key
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
