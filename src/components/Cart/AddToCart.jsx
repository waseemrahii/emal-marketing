import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import "./AddToCart.css"
const Cart = () => {
    return (
        <div className="hcart-stepper container snipcss-pNcVB">
            <div className="cart-heading h-pt-32 h-pt-48-lg">
                <h1 className="flex-grow h-m-0 order-1 order-0-lg">Your cart</h1>
            </div>
            <div className="hcart-stepper__wrapper">
                <div className="hcart-stepper__container--left">
                    <div className="cart-step">
                        <div className="cart-choose-period h-mt-32">
                            <div className="cart-periods-select" data-qa="plan-section">
                                <h3 className="cart-periods-select__plan-name" data-qa="plan-name" data-qa-value="KVM 2">KVM 2</h3>
                                <div className="cart-periods-select__plan-container cart-periods-select__plan-container--no-offer">
                                    <div className="cart-periods-select__select">
                                        <div className="h-select" data-qa="period-input">
                                            <div className="h-input primary">
                                                <div className="h-input__input-wrapper">
                                                    <div className="h-form-field-label h-form-field-label--filled h-form-field-label--force-focused">Period</div>
                                                    <input className="h-input__input" placeholder="" type="text" data-1p-ignore="true" readOnly />
                                                    <div className="h-form-field-icon">
                                                        <span className="h-icon h-ml-8" data-qa="dropdown-icon">
                                                            <AiOutlineDown />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-periods-select__pricing">
                                        <div className="cart-periods-select__pricing--save" data-qa="period-discount-label">Save Rs.79,200.00</div>
                                        <div className="cart-periods-select__pricing--price">
                                            <h4 data-qa="period-price" data-qa-value="Rs.2,090.00"><b>Rs.2,090.00 / month</b></h4>
                                            <small className="strike" data-qa="period-old-price" data-qa-value="Rs.5,390.00">Rs.5,390.00 / month</small>
                                        </div>
                                    </div>
                                </div>
                                <small className="cart-plan__renew text-center-lg cart-periods-select__renewal" data-qa="period-renewal-line">Renews at Rs.3,090.00/month on 04/10/2026. Cancel anytime!</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hcart-stepper__container--right">
                        <div className="hcart-estimate hcart-stepper__container--estimate" data-qa="subtotal-section">
                            <div className="hcart-estimate--pricing--small">
                                <div className="d-flex flex-column">
                                    <div className="hcart-estimate__line-title">
                                        <h4 className="headline-pt">Subtotal</h4>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="old-price body-1">Rs.129,360.00</div>
                                        <h3 className="hcart-estimate__price body-4">Rs.50,160.00</h3>
                                    </div>
                                </div>
                                <button className="h-button text primary h-p-0">
                                    <span className="h-button__content">
                                        <span className="h-icon">
                                            <AiOutlineUp />
                                        </span>
                                    </span>
                                </button>
                            </div>
                            <div className="hcart-estimate--pricing">
                                <div className="align-items-center justify-content-space-between d-flex">
                                    <div className="hcart-estimate__line-title">
                                        <h4 className="headline-pt">Subtotal</h4>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="old-price body-1" data-qa="subtotal-old-price">Rs.129,360.00</div>
                                        <h3 className="hcart-estimate__price body-4" data-qa="subtotal-price">Rs.50,160.00</h3>
                                    </div>
                                </div>
                                <div className="align-items-center justify-content-space-between d-flex">
                                    <div className="hcart-estimate__line-title">Plan discount -61%</div>
                                    <div className="body-1 success" data-qa="plan-discount"> -Rs.79,200.00</div>
                                </div>
                                <div className="h-mt-8">
                                    <div>
                                        <a id="hcart-have-a-coupon-btn" className="f-button" data-qa="have-a-coupon-code-button">Have a coupon code?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="hcart-estimate__divider d-none-md"></div>
                            <button className="h-button primary" data-qa="continue-button">
                                <span className="h-button__content">Continue</span>
                            </button>
                        </div>
                        <div className="hcart-stepper__money-back body-1" data-qa="money-back-guarantee-line">
                            <span className="h-icon">
                                {/* SVG icon here */}
                            </span> 
                            30-day money-back guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
