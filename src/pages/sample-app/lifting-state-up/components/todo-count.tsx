import Text from './text'

interface TodoCountProps {
  count: number
}

export default function TodoCount({ count }: TodoCountProps) {
  return (
    <p>
      <Text>Total Todo: {count}</Text>
    </p>
  )
}
