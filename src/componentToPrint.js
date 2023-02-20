// Using a class component, everything works without issue
import * as React from 'react';
import './index.css'
// export class ComponentToPrint extends React.PureComponent {
//     render() {
//       return (
//         <div>ffff</div>
//       );
//     }
//   }
export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div className='yourClassName'>
        write the the content of page here 
        </div>
      );
    }
  }
  
  // Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
  // the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
  // https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
//   export default ComponentToPrint = React.forwardRef((props, ref) => {
//     return (
//       <div ref={ref}>lll</div>
//     );
//   });