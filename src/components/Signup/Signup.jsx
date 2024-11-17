import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import axios from 'axios';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/register`, {
        username: name,
        email,
        companyName: company,
        password
      });

      console.log("Response:", response.data);
      toast.success('Registration successful!');
      navigate("/"); // Navigate to the login page after successful registration
    } catch (error) {
      console.error(error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <ToastContainer />
      <section className="sign-up-in-section bg-dark ptb-60 snipcss-kp6G4 style-CrJym" id="style-CrJym">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12" style={{ padding: "3rem 0rem 0rem 0rem" }}>
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg" style={{ display: "flex", gap: "1rem" }}>
                {/* Left Section */}
                <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
                  <Link to="/" className="mb-5 d-none d-xl-block d-lg-block router-link-active">
                    <img src="logo.removebg.png" alt="Logo" style={{
                      width: "50px",
                      background: "ghostwhite",
                      borderRadius: "10px"
                    }} />
                  </Link>
                  <div className="customer-testimonial-wrap mt-60">
                    <div id="nav-tabContent" className="tab-content">
                      <div id="testimonial-tab-1" role="tabpanel" className="tab-pane fade show active">
                        <div className="testimonial-tab-content mb-4">
                          <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                            {[...Array(5)].map((_, i) => (
                              <li key={i} className="list-inline-item">
                                <FaStar className="text-warning" />
                              </li>
                            ))}
                          </ul>
                          <blockquote>
                            <h5 className='text-white'>The Best Email Marketing!</h5>
                          </blockquote>
                          <div className="author-info mt-4">
                            <h6 className="mb-0">Joe Richard</h6><span>Visual Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Section */}
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-white order-0 order-lg-1">
                  <Link to="/" className="mb-5 d-block d-xl-none d-lg-none router-link-active">
                    <img src="logo.removebg.png" alt="Logo" style={{ width: "50px" }} />
                  </Link>
                  <h1 className="h3">Create an Account</h1>
                  <p className="">Get started with your free account today. No credit card needed and no setup fees.</p>
                  <form onSubmit={handleSubmit} className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">Name <span className="text-danger">*</span></label>
                        <input type="text" id="name" placeholder="Name" value={name}
                          onChange={(e) => setName(e.target.value)} required className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="email" className="mb-1">Email <span className="text-danger">*</span></label>
                        <input type="email" id="email" placeholder="Email" value={email}
                          onChange={(e) => setEmail(e.target.value)} required className="form-control" />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="company" className="mb-1">Company</label>
                        <input type="text" id="company" placeholder="Company" value={company}
                          onChange={(e) => setCompany(e.target.value)} className="form-control" />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="password" className="mb-1">Password <span className="text-danger">*</span></label>
                        <input type="password" id="password" placeholder="Password" value={password}
                          onChange={(e) => setPassword(e.target.value)} required className="form-control" />
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input type="checkbox" id="flexCheckChecked" className="form-check-input me-2" />
                          <label htmlFor="flexCheckChecked" className="form-check-label">
                            I have read and agree to the <Link to="#" className="text-decoration-none">Terms &amp; Conditions</Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mt-4 d-block w-100">Submit</button>
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
