
import Image from 'next/image'
import { TodoItem } from '../types/TodoItem';
'use client'
import { useState } from 'react';


export default function Home() {
  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Fazer dever de casa', checked: true},
    { id: 2, label: 'Comprar bolo', checked: false}

  ]);

  function handleClick(){
    if(itemInput.trim() === '') return
    setList([...list, {id: list.length + 1 ,label: itemInput, checked: false}]);
    setItemInput('')
  }

  function removerItem(id: number){
    setList(list.filter( (todo) => todo.id !== id))
  }

  function toggleItem(id: number){
    let newList = [...list];

    newList.forEach((todo) => {
      if(todo.id === id){
        todo.checked = !todo.checked
      }
    })
    // newList[item].checked = !newList[item].checked;
    
    setList(newList)
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center text-2xl bg-black'>
      <h1 className='text-4xl mt-5'>Lista de tarefas</h1>

      <div className='flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-800'>
        <input 
          type="text"
          placeholder='O que deseja fazer?'
          className='flex-1 p-3 text-2xl text-black'
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />

        <button className='text-gray-200 ml-3'onClick={handleClick} >Adicionar</button>
      </div>

      <p className='text-gray-100 mb-8'> {list.length} itens na lista </p>

      <ul className='w-full max-w-lg list-disc pl-5 text-gray-200'>

        { list.map( (item) => (
          
          <li key={item.id} className={item.checked ? 'line-through' : ''} >
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className='w-6 h-6 mr-3' />

            {item.label} - <button onClick={() => removerItem(item.id)} className='hover:underline'>[ deletar ]</button>
          </li>
        )) }
      </ul>
    </div>
  )
}
