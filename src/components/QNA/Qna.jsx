import React from 'react';

const Qna = () => {
  return (
     <div className='bg-light p-4'>
       <h1 className='text-center fw-bold py-5'>Assignment Question Answer Section</h1>
    <div className='d-lg-flex gap-3'>
      <div className="bg-info p-3 rounded-4">
        <h3 className='fw-bold'>Difference Between Props and State</h3>
        <p className='text-white fw-semibold'>In React Props and States are used to store Data in a Component. <br/>
        The main Differenceis props are immutable, means we can not change props value. <br/>
        But State is mutable. when any change occurs state re-render the componente without refreshing the page
        </p>
      </div>

      <div className="bg-info p-3 rounded-4 mt-3">
        <h3 className='fw-bold'>How useState() Works</h3>
        <p className='text-white fw-semibold'>
          useStae() is a React Hook that used to add state to a functional component. It returns an array with two elements: the first element is the current state value, and the second element is a function use to update the state value.
        </p>
      </div>
    </div>

    <div className='d-lg-flex gap-3 mt-4'>
      <div className="bg-info p-3 rounded-4">
        <h3 className='fw-bold'>What else useEffect() do without Data Fetch</h3>
        <p className='text-white fw-semibold'>useEffect() is a React Hook that used to perform side effects in functional components.<br/>
        Without fetch data from an API, it can also be used for other purposes.<br/>
        It can perform side effects in functional components. if some value is changed in a component we can re-render the component or the code inside the useEffect.
        </p>
      </div>

      <div className="bg-info p-3 rounded-4 mt-3">
        <h3 className='fw-bold'>How does React works?</h3>
        <p className='text-white fw-semibold'>
          Some Example How React works:
          <br />
          <ul>
            <li>React uses a virtual DOM (Document Object Model) to represent the UI</li>
            <li>React components are the building blocks of the UI</li>
            <li>Components have state and props to contain Data.</li>
            <li>React uses a unidirectional data flow model, </li>
          </ul>
  
        </p>
      </div>
    </div>
    </div>
  );
};

export default Qna;