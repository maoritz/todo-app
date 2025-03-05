import { useState } from "react"

function NewTodoForm({onSubmit}) {

  const [newItem,setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    onSubmit(newItem)
    setNewItem("") //Reset the text field after submit.
  }


  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn" >Add</button>
      </form>
    </>
  )
}

export default NewTodoForm