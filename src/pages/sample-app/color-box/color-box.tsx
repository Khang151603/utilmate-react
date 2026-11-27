import { useState } from 'react'

type Color = {
  name: string
  value: string
}

const colors: Color[] = [
  { name: 'red', value: '#ff0000' },
  { name: 'yellow', value: '#ffff00' },
  { name: 'aqua', value: '#00ffff' },
  { name: 'purple', value: '#800080' },
]

const questions = [
  {
    id: 'sign-up-form',
    name: 'Sign-Up Form',
    category: 'HTML',
  },
  {
    id: 'item-cart',
    name: 'Item Cart',
    category: 'Javascript',
  },
  {
    id: 'spaghetti-recipe',
    name: 'Spaghetti Recipe',
    category: 'HTML',
  },
  {
    id: 'blog-post',
    name: 'Blog Post',
    category: 'CSS',
  }
]

const submissions = [
  {
    questionId: 'blog-post',
    status: 'CORRECT',
  },
  {
    questionId: 'sign-up-form',
    status: 'INCORRECT',
  },
  {
    questionId: 'spaghetti-recipe',
    status: 'PARTIALLY_CORRECT',
  },
  {
    questionId: 'item-cart',
    status: 'CORRECT',
  },
]

export default function ColorBox() {
  const [activeColor, setActiveColor] = useState<Color | null>(null);

  const questionsByCategory = questions.reduce((acc: any, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = []
    }
    acc[curr.category].push(curr); 
    return acc;
  }, {})

  return (
    <main className="max-w-lg bg-gray-100 p-3 text-black">
      <h1 className="mb-3 text-xl font-bold">Demo</h1>
      <p className="mb-4 text-lg">
        Current color: {activeColor ? activeColor.name : 'Default'}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() =>
              setActiveColor((currentColor) =>
                currentColor?.name === color.name ? null : color
              )
            }
            className="h-16 cursor-pointer text-xl"
            style={{
              backgroundColor:
                activeColor && activeColor.name !== color.name
                  ? activeColor.value
                  : color.value,
            }}
          >
            {color.name}
          </button>
        ))}
      </div>

      <br />

      <h3 className='text-2xl'>Demo QuestionBoard</h3>
      <div className='flex'>
        {Object.keys(questionsByCategory).map(key => {
          const data = questionsByCategory[key];
        
          return (
             <div key={key} className="column">
              <h2>{key} - 0 / 4</h2>
              {data.map(data => {
                const submission = submissions.find(sub => sub.questionId === data.id) || null;
                const status = submission ? submission.status : 'gray'
                return (
                  <div key={data.id} className="boards">
                    <div className="question">
                      <div className={`question__status question__status--${status.toLowerCase()}`} />
                      <h2 className="question__title">{data.name}</h2>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </main>
  )
}
