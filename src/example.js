// import * as React from 'react';
// import ReactToPrint from 'react-to-print';

// import { ComponentToPrint } from './componentToPrint';

// class Example extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//             // to the root node of the returned component as it will be overwritten.
//             return <a href="#">Print this out!</a>;
//           }}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }


import * as React from 'react';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import { ComponentToPrint } from './componentToPrint';


const Example = () => {
  var componentRef = useRef();

  return (
    <div>
      {/* <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      /> */}
      
      {/* <ComponentToPrint ref={componentRef} /> */}

      <ReactToPrint
  trigger={() => {
    return <a href="#">Print</a>;
  }}
  content={() => componentRef}
/>
<ComponentToPrint ref={el => (componentRef = el)} />
    </div>
  );
};

export default Example