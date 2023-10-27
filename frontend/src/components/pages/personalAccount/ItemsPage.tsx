import {ModalWindow} from "../../ui/modal/ModalWindow";
import {useEffect, useState} from "react";
import {ItemEdit} from "./ItemEdit";
import React from "react";
import {ItemOrder} from "../feedbackPage/FeedbackPage";
import axios from "axios";
interface ResponseItemOrder extends ItemOrder{
    id:number
}
export const ItemsPage = () => {
    const [active, setActive] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [itemsOrder, setItemsOrder] = useState<ResponseItemOrder[]>([])
    useEffect(() => {
        axios.get<ResponseItemOrder[]>("http://localhost:8080/orders").then(response => {
            setItemsOrder(response.data)
        })
    }, []);
    return (
        <>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Zip</th>
                    <th scope="col">Link</th>
                </tr>
                </thead>
                <tbody>
                {
                    itemsOrder.map(item=>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td >{item.firstName}</td>
                        <td >{item.lastName}</td>
                        <td >{item.email}</td>
                        <td >{item.address}</td>
                        <td >{item.zip}</td>
                        <td >{item.productLink}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );
};