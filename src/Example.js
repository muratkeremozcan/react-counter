import { useState } from 'react'
import './Example.css'

export default function Example({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  const double = () => setCount(count * 2)

  return (
    <div className="Example">
      <p className="full">
        You clicked <span data-cy="count">{count}</span> times
      </p>
      <button
        className="full"
        data-cy="add"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      <button className="full" data-cy="double" onClick={double}>
        Double me
      </button>
    </div>
  )
}

// class vs function component

// export class Example extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: props.initialCount || 0,
//     }
//   }

//   double() {
//     console.log('doubling the current value', this.state.count)
//     this.setState({ count: this.state.count * 2 })
//   }

//   render() {
//     return (
//       <div className="Example">
//         <p className="full">
//           You clicked <span data-cy="count">{this.state.count}</span> times
//         </p>
//         <button
//           className="full"
//           data-cy="add"
//           onClick={() => this.setState({ count: this.state.count + 1 })}
//         >
//           Click me
//         </button>

//         <button className="full" data-cy="double" onClick={() => this.double()}>
//           Double me
//         </button>
//       </div>
//     )
//   }
// }
