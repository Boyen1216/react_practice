import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  // 處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false)

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
    },
    { id: 2, text: '學react', completed: false },
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
        // 中文輸入法用
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
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  // step1:  拷貝出新的物件陣列
                  const newTodos = todos.map((v2, i2) => {
                    return { ...v2 }
                  })

                  // step2: 在新的物件陣列上修改
                  newTodos[i].completed = !newTodos[i].completed

                  // step3: 設定回state
                  setTodos(newTodos)

                  //   setTodos(
                  //     todos.map((v2, i2) =>
                  //       v2.id === v.id
                  //         ? { ...v2, completed: !v2.completed }
                  //         : { ...v2 }
                  //     )
                  //   )
                }}
              />
              {v.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
