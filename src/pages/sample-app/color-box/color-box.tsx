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

export default function ColorBox() {
  const [activeColor, setActiveColor] = useState<Color | null>(null)

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
    </main>
  )
}
