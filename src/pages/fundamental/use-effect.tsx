import React from "react"

/* useEffect
- Perform calls the effect asynchronously.
- It always run every component re-render (include first render)

dependency
- The second argument which takes an array.
- The useEffect only run one time if the second argument receives an empty array.
- The useEffect will re-run if the value changes.

clean up function
- Only run when component re-render or unmount
- Run before function in useEffect run
- Don't run for first render
- useLayoutEffect() is invoked synchronously, before the browser repaints the screen.
*/

interface ITodo {
  id: number,
  title: string
}

function UseEffect() {
  const [count, setCount] = React.useState(1); // shadow compare
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [limit, setLimit] = React.useState<number>(2) 

  React.useEffect(() => {
    console.log('useEffect with no dependency');

    function resizeFunction(e) {
      console.log('width window: ', e.target.innerWidth)
    }
    window.addEventListener('resize', resizeFunction)

    return () => {
      console.log('clean up useEffect with no dependency');
      window.removeEventListener('resize', resizeFunction)
    }
  }); // always run every component re-render (include first render)

  React.useEffect(() => {
    console.log('useEffect with empty dependency')

    return () => {
      console.log('clean up useEffect with empty dependency');
    }
  }, []); // run one time for first render

  React.useEffect(() => {
    console.log('useEffect with value dependency: ', count);

    return () => {
      console.log('clean up useEffect with value dependency');
      
    }
  }, [count]); // run every value changes (shadow compare)

   React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency');
    return () => {
      console.log('clean up useLayoutEffect with no dependency');
    }
  }); // always run every component re-render (include first render)

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency')

    return () => {
      console.log('clean up useLayoutEffect with empty dependency');
    }
  }, []); // run one time for first render

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with value dependency: ', count);
    return () => {
      console.log('clean up useLayoutEffect with value dependency');
    }
  }, [count]); // run every value changes (shadow compare)

  // React.useEffect(() => {
  //   async function fetchTodo() {
  //     try {
  //       const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
  //       const data = await response.json()
  //       setTodos(data);
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   fetchTodo();
  // }, [limit])

  function handleLimit(e: any) {
    setLimit(Number(e.target.value))
  }

  console.log('Component render ----: ', count)
  return (
    <div>
      UseEffect: {count} <br />
      <button 
        type="button" 
        className="border cursor-pointer" 
        onClick={() => setCount(prevState => prevState + 1)}
      >
        Update
      </button>
      <h3 className="text-2xl">Todos</h3>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}

      Limit: 
      <select value={limit} onChange={handleLimit}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  )
}

export default UseEffect