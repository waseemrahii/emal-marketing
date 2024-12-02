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
  const [address, setAddress] = useState(""); // Added state for address
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log("user data ", name,email,country,phone, password, address)
      
      const response = await axios.post(`${ApiUrl}/api/users/signup`, {
        username: name,
        email,
        country,
        password,
        phone,
        address, // Include address in the API call
      });

      if (response.status === 201) { // Check for successful status
        console.log("Response:", response.data);
        toast.success('Registration successful!');
        navigate("/"); // Navigate to the login page after successful registration
      }
    } catch (error) {
      console.error(error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <ToastContainer />
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
