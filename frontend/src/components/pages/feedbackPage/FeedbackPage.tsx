import React, {useState} from 'react';
import './feedbackPage.css'
import axios from "axios";

export interface ItemOrder {
    firstName: string
    lastName: string
    email: string
    address: string
    zip: string
    productLink: string
}
export const FeedbackPage = () => {
    const [itemOrder, setItemOrder] = useState<ItemOrder> (
        {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            zip: "",
            productLink: ""
        }
    )
    const postFunction = ()=>{
        axios.post("http://localhost:8080/orders", itemOrder).then()
        setItemOrder({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            zip: "",
            productLink: ""
        })
    }
    return (
        <>
            <div className="supportForForm">
                <div className="allForms m-auto">
                    <form className="row g-3 needs-validation" noValidate>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                            <input
                                value={itemOrder.firstName}
                                onChange={(event)=>setItemOrder({...itemOrder, firstName:event.target.value})}
                                type="text" className="form-control" id="validationCustom01" placeholder="Lev"
                                   required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom02" className="form-label">Last name</label>
                            <input
                                value={itemOrder.lastName}
                                onChange={(event)=>setItemOrder({...itemOrder, lastName:event.target.value})}
                                type="text" className="form-control" id="validationCustom02" placeholder="Shilov"
                                   required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom03" className="form-label">Email</label>
                            <input
                                value={itemOrder.email}
                                onChange={(event)=>setItemOrder({...itemOrder, email:event.target.value})}
                                type="email" className="form-control" id="validationCustom03"
                                   placeholder="example@mail.ru" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-9">
                            <label htmlFor="validationCustom04" className="form-label">Address</label>
                            <input
                                value={itemOrder.address}
                                onChange={(event)=>setItemOrder({...itemOrder, address:event.target.value})}
                                type="text" className="form-control" id="validationCustom04"
                                   placeholder="Mirea, Vernadskogo 86" required/>
                            <div className="invalid-feedback">
                                Please provide a valid address.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="validationCustom05" className="form-label">Zip</label>
                            <input
                                value={itemOrder.zip}
                                onChange={(event)=>setItemOrder({...itemOrder, zip:event.target.value})}
                                type="text" className="form-control" id="validationCustom05" placeholder="14477"
                                   required/>
                            <div className="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationCustom06" className="form-label">Link to product</label>
                            <textarea
                                value={itemOrder.productLink}
                                onChange={(event)=>setItemOrder({...itemOrder, productLink:event.target.value})}
                                className="form-control" id="validationCustom06" required></textarea>
                            <div className="invalid-feedback">
                                Please provide a valid message.
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                onClick={postFunction}
                                className="btn btn-primary" type="button"> Make an order</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};