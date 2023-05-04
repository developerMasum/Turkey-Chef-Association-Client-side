// import React from "react";
// import icon from "../../../assets/social.jpg";

// const Footer = () => {
//   return (
//     <div className="bg-black text-white container mt-5  ">
//       <div>
//         <div>
//           <div>
//             <h2>Recipe-Hunter</h2>
//             <p>
//               There are many variation of delicious foods which cooked by
//               experiencess chef.
//             </p>
//           </div>
//           <div className="d-flex ps-5 ">
//             <div className=" ps-5">
//               <h3>Company</h3>
//               <ul className="ps-5">
//                 <li>About us </li>
//                 <li>latest Foods</li>
//                 <li>Careers</li>
//                 <li>Work</li>
//               </ul>
//             </div>
//             <div className="ps-5">
//               <h3>Product</h3>
//               <ul>
//                 <li>New Menu</li>
//                 <li>Comfort and relax</li>
//                 <li>Customers</li>
//                 <li>Custom</li>
//               </ul>
//             </div>
//             <div className="ps-5">
//               <h3>Support</h3>
//               <ul>
//                 <li>Help People</li>
//                 <li>Sales</li>
//                 <li>Become a Partner</li>
//                 <li>new Item</li>
//               </ul>
//             </div>
//             <div className="ps-5">
//               <h3>Contact</h3>
//               <p>524 Broadway , NYC</p>
//               <p>+1 777 - 978 - 5570</p>
//               <img src={icon} alt="" />
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div>
//           <div>
//             <p>@2023 SFC tech. All Rights Reserved</p>
//           </div>
//           <div>
//             <p>Powered by Recipe-Hunter</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bgcolor container py-2 px-3 mt-5 mb-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>Here, you will find all of  bests of best chef in Turkey. Their Recipe also here found . hope, Enjoy it</p>
          </Col>
          <Col md={3}>
            <h5>Countries</h5>
            <ul className="list-unstyled ">
              <li><a className='text-decoration-none text-black' href="#">Turkey</a></li>
              <li><a className='text-decoration-none text-black' href="#">Bangladesh</a></li>
              <li><a className='text-decoration-none text-black' href="#">Pakistan</a></li>
              <li><a className='text-decoration-none text-black' href="#">Japan</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a className='text-decoration-none text-black' href="#">Privacy Policy</a></li>
              <li><a className='text-decoration-none text-black' href="#">Terms of Use</a></li>
              <li><a className='text-decoration-none text-black' href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a className='text-decoration-none text-black' href="#"> <FaFacebook /> Facebook</a></li>
              <li><a className='text-decoration-none text-black' href="#"><FaTwitter /> Twitter</a></li>
              <li><a className='text-decoration-none text-black' href="#"><FaInstagram/>  Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-muted">&copy; 2023 Turkey Chef Association. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;

