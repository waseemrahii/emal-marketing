import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from "../../ApiUrl";

const SubscriptionPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { plan } = state;

  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  // Get the userId from localStorage
  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user)._id : null;

  if (!userId) {
    navigate("/signin");
    return null;
  }

  const handleSubscription = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const subscriptionData = {
      userId: userId,
      packageType: plan.id,
      phoneCountry: formData.get("phone"),
      zipCode: formData.get("zipcode"),
    };

    if (plan.price === 0) {
      // Free subscription
      try {
        const response = await axios.post(
          `${ApiUrl}/api/subscriptions/`,
          subscriptionData
        );
        if (response.status === 201) {
          toast.success("Subscription successful!");
          navigate("/");
        } else {
          toast.error("Subscription failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred.");
      }
    } else {
      // Redirect to Stripe checkout
      navigate("/checkout", { state: { subscriptionData } });
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className="sign-up-in-section">
        <div className="container">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-lg-6 col-md-8 col-sm-12 mt-10" style={{ marginTop: "10rem" }}>
              <div className="register-wrap bg-white p-5 shadow rounded-custom">
                <h1 className="h3 text-center mb-4">Subscribe to {plan.title}</h1>
                <form onSubmit={handleSubscription} className="mt-4 register-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <label htmlFor="country" className="mb-1">
                        Country <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          aria-label="country"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="address" className="mb-1">
                        Address <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          aria-label="address"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="phone" className="mb-1">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          required
                          aria-label="phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="zipcode" className="mb-1">
                        Zip Code <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="zipcode"
                          name="zipcode"
                          required
                          aria-label="zipcode"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary mt-3 d-block w-100">
                        {plan.price === 0 ? "Subscribe" : "Proceed to Checkout"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;
