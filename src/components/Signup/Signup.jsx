import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';
import ApiUrl from '../../ApiUrl';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState(""); // State for address
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${ApiUrl}/api/users/signup`, {
        username: name,
        email,
        country,
        password,
        phone,
        address,
      });
  
      if (response.status === 201) {

        toast.success('Registration successful!');
      // Delay navigation to ensure the toast is visible
      setTimeout(() => {
        navigate('/signin');
      }, 2000); // 2-second delay
      }
    } catch (error) {
      console.error('Error:', error); // Log the full error to the console
  
      if (error.response) {
        console.error('Response error:', error.response);
  
        const errorData = error.response.data;
  
        if (error.response.status === 500 && errorData?.error?.code === 11000) {
          // Handle MongoDB duplicate key error
          const duplicateField = Object.keys(errorData.error.keyPattern)[0];
          if (duplicateField === 'username') {
            toast.error('Username already exists. Please choose a different username.');
          } else if (duplicateField === 'email') {
            toast.error('Email already exists. Please use a different email.');
          } else {
            toast.error('Duplicate value found. Please use different data.');
          }
        } else if (error?.response?.status === 400 && errorData?.message === 'User already exists.') {
          toast.error('User with this username or email already exists.');
        } else {
          toast.error('Registration failed please use different email. Please try again.');
        }
      } else if (error.request) {
        console.error('Request error:', error.request);
        toast.error('No response from the server. Please check your connection.');
      } else {
        console.error('Unexpected error:', error.message);
        toast.error('An unexpected error occurred. Please try again.');
      }
    }
  };
  
  
  return (
    <div>
 <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="container p-4" id="style-CrJym mt-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-10" style={{ padding: "3rem 0rem 0rem 0rem" }}>
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg" style={{ display: "flex", gap: "1rem" }}>
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-white order-0 order-lg-1">
                  <h1 className="h3">Create an Account</h1>
                  <p>Get started with your free account today. No credit card needed and no setup fees.</p>
                  <form onSubmit={handleSubmit} className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="email" className="mb-1">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="phone" className="mb-1">
                          Phone No
                        </label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="country" className="mb-1">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          placeholder="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="address" className="mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="password" className="mb-1">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input type="checkbox" id="flexCheckChecked" className="form-check-input me-2" />
                          <label htmlFor="flexCheckChecked" className="form-check-label">
                            I have read and agree to the{' '}
                            <Link to="#" className="text-decoration-none">
                              Terms &amp; Conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mt-4 d-block w-100">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;




// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Signup.css';
// import axios from 'axios';
// import { useState } from 'react';
// import ApiUrl from '../../ApiUrl';

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [country, setCountry] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("User Data: ", { name, email, country, phone, password, address });

//       const response = await axios.post(`${ApiUrl}/api/users/signup`, {
//         username: name,
//         email,
//         country,
//         password,
//         phone,
//         address,
//       });

//       if (response.status === 201) {
//         console.log("Response:", response.data);
//         toast.success('Registration successful!', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => navigate("/signin"), 3000); // Navigate after a delay for toast display
//       } else {
//         toast.error('Unexpected response from the server.');
//       }
//     } catch (error) {
//       console.error("Error:", error);

//       // Check for server error response
//       if (error.response) {
//         toast.error(`Error: ${error.response.data.message || 'Registration failed.'}`);
//       } else {
//         toast.error('Network error or server is unreachable.');
//       }
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <section className="container p-4" id="style-CrJym mt-12">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-7 col-10" style={{ padding: "3rem 0rem 0rem 0rem" }}>
//               <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg" style={{ display: "flex", gap: "1rem" }}>
//                 <div className="price-feature-col pricing-action-info p-5 right-radius bg-white order-0 order-lg-1">
//                   <h1 className="h3">Create an Account</h1>
//                   <p>Get started with your free account today. No credit card needed and no setup fees.</p>
//                   <form onSubmit={handleSubmit} className="mt-5 register-form">
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <label htmlFor="name" className="mb-1">
//                           Name <span className="text-danger">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           placeholder="Name"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           required
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-sm-6">
//                         <label htmlFor="email" className="mb-1">
//                           Email <span className="text-danger">*</span>
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           placeholder="Email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           required
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="phone" className="mb-1">
//                           Phone No
//                         </label>
//                         <input
//                           type="text"
//                           id="phone"
//                           placeholder="phone"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="country" className="mb-1">
//                           Country
//                         </label>
//                         <input
//                           type="text"
//                           id="country"
//                           placeholder="Country"
//                           value={country}
//                           onChange={(e) => setCountry(e.target.value)}
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="address" className="mb-1">
//                           Address
//                         </label>
//                         <input
//                           type="text"
//                           id="address"
//                           placeholder="Address"
//                           value={address}
//                           onChange={(e) => setAddress(e.target.value)}
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-sm-12">
//                         <label htmlFor="password" className="mb-1">
//                           Password <span className="text-danger">*</span>
//                         </label>
//                         <input
//                           type="password"
//                           id="password"
//                           placeholder="Password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           required
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="col-12">
//                         <div className="form-check d-flex">
//                           <input type="checkbox" id="flexCheckChecked" className="form-check-input me-2" />
//                           <label htmlFor="flexCheckChecked" className="form-check-label">
//                             I have read and agree to the{' '}
//                             <Link to="#" className="text-decoration-none">
//                               Terms &amp; Conditions
//                             </Link>
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <button type="submit" className="btn btn-primary mt-4 d-block w-100">
//                           Submit
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignUp;
