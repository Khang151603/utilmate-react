import Button from '../../components/ui/button'
import Typography from '../../components/ui/typography'
import UserCard from '../../components/user/user-card'

function ReactProps() {
  const user = {
    firstName: 'tony',
    lastName: 'nguyen',
    age: 18,
    book: {
      name: 'Avatar',
      author: 'Cameron'
    }
  }

  return (
    <div>
      <h1>React Props</h1>

      <Button 
        text="Ok"
        type="button"
        className="primary"
        disabled={false}
        name="ok"
        onClick={() => {
          console.log('click')
        }}
        colors={['blue', 'yellow', 'red']}
      >
        this is children
      </Button>
      <br /><br />
      <h4> Rest & Spread Object</h4>
      <UserCard 
        // firstName={user.firstName}
        // lastName={user.lastName}
        // age={user.age}
        {...user} // spread props
        typography={<Typography text="this is props typo" />}
      >
        Demo with children <br />
        <Button 
          text="Ok"
          type="button"
          className="primary"
          disabled={false}
          name="ok"
          onClick={() => {
            console.log('click')
          }}
          colors={['blue', 'yellow', 'red']}
        >
          this is children
        </Button>
      </UserCard>
    </div>
  )
}

export default ReactProps