import React, { useRef } from "react";
import { Accordion, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
import ReactToPrint from "react-to-print";
// import ReactToPrint from 'react-to-print';

const Blogs = () => {
  const ref = useRef();
  return (
    <>
      <div className="">
        <div className="px-5">
          <Accordion className="container mt-5 ">
            <h5 className="text-center mb-5">Blogs:</h5>
            <div ref={ref} >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  What is the differences between uncontrolled and controlled
                  components ?
                </Accordion.Header>
                <Accordion.Body>
                  Controlled components provide a more predictable and
                  controlled way of managing state and user input, while
                  uncontrolled components can be simpler to implement in certain
                  cases. The choice between the two depends on the specific
                  requirements of the application and the preferences of the
                  developer.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How to validate React props using PropTypes
                </Accordion.Header>
                <Accordion.Body>
                  PropTypes is a built-in library in React that provides a way
                  to validate the data types of props passed into a component.
                  It helps catch errors early in the development process and
                  makes the code more reliable and easier to maintain. To use
                  PropTypes, you can import the library from the 'prop-types'
                  package and define the expected prop types for a component
                  using the propTypes property. PropTypes provides validators
                  for various data types such as string, number, boolean,
                  object, array, etc., and you can also specify if a prop is
                  required or not using the isRequired validator. By validating
                  React props using PropTypes, you can ensure that your
                  components receive the correct data types and avoid common
                  errors.
                </Accordion.Body>
              </Accordion.Item>
            
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Tell us the difference between nodejs and express js
              </Accordion.Header>
              <Accordion.Body>
                Node.js is a JavaScript runtime that allows developers to run
                JavaScript code outside of a web browser. Express.js is a web
                application framework built on top of Node.js that provides
                additional features and tools for building web applications,
                such as middleware and routing. While Node.js provides the
                underlying runtime environment, Express.js provides the
                structure and functionality for building web applications on top
                of Node.js.
              </Accordion.Body>
            </Accordion.Item>
            </div>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What is a custom hook, and why will you create a custom hook?
              </Accordion.Header>
              <Accordion.Body>
                In React, a custom hook is a JavaScript function that starts
                with the prefix "use" and allows you to reuse stateful logic
                across different components. You can create a custom hook when
                you need to share logic between multiple components that are not
                related by the parent-child relationship. By encapsulating the
                shared logic in a custom hook, you can improve the readability
                and maintainability of your code, and avoid duplicating code in
                multiple components. Custom hooks allow you to abstract away
                complex logic and create reusable pieces of code that can be
                easily shared and tested.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="mt-5 mb-5">
       <ReactToPrint
          trigger={() => (
            <Button variant="warning" size="lg">
              Download/Print
            </Button>
          )}
          content={() => ref.current}
        />
       </div>
        </div>

      
      </div>
    </>
  );
};

export default Blogs;

{
  /* <Accordion className="container mt-5 ">
      <h5 className="text-center mb-5">Blogs:</h5>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            What is the differences between uncontrolled and controlled components ? 
          </Accordion.Header>
          <Accordion.Body>
            Controlled components provide a more predictable and controlled way
            of managing state and user input, while uncontrolled components can
            be simpler to implement in certain cases. The choice between the two
            depends on the specific requirements of the application and the
            preferences of the developer.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How to validate React props using PropTypes
          </Accordion.Header>
          <Accordion.Body>
            PropTypes is a built-in library in React that provides a way to
            validate the data types of props passed into a component. It helps
            catch errors early in the development process and makes the code
            more reliable and easier to maintain. To use PropTypes, you can
            import the library from the 'prop-types' package and define the
            expected prop types for a component using the propTypes property.
            PropTypes provides validators for various data types such as string,
            number, boolean, object, array, etc., and you can also specify if a
            prop is required or not using the isRequired validator. By
            validating React props using PropTypes, you can ensure that your
            components receive the correct data types and avoid common errors.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Tell us the difference between nodejs and express js
          </Accordion.Header>
          <Accordion.Body>
            Node.js is a JavaScript runtime that allows developers to run
            JavaScript code outside of a web browser. Express.js is a web
            application framework built on top of Node.js that provides
            additional features and tools for building web applications, such as
            middleware and routing. While Node.js provides the underlying
            runtime environment, Express.js provides the structure and
            functionality for building web applications on top of Node.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is a custom hook, and why will you create a custom hook?
          </Accordion.Header>
          <Accordion.Body>
            In React, a custom hook is a JavaScript function that starts with
            the prefix "use" and allows you to reuse stateful logic across
            different components. You can create a custom hook when you need to
            share logic between multiple components that are not related by the
            parent-child relationship. By encapsulating the shared logic in a
            custom hook, you can improve the readability and maintainability of
            your code, and avoid duplicating code in multiple components. Custom
            hooks allow you to abstract away complex logic and create reusable
            pieces of code that can be easily shared and tested.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */
}
