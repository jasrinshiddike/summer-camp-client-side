import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import './CheckoutForm.css';

const CheckoutForm = ({ price, selectedCart }) => {
    const stripe = useStripe();
    const {user} = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        //console.log(price);
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                //console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            //console.log(paymentMethod);
        }

        setProcessing(true);
        
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            })
            if(confirmError){
                console.log(confirmError);
            }
            console.log(paymentIntent);
            setProcessing(false);
            if(paymentIntent?.status == 'succeeded'){
                setTransactionId(paymentIntent.id)
                //save payment information to the server
                const payment = {
                    email: user?.email, 
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    quantity: selectedCart.length,
                    items: selectedCart.map(item => item._id),
                    classesItem: selectedCart.map(item => item.selectedClassId),
                    status: 'pending',
                    itemName: selectedCart.map(item => item.class_name)
                }
                axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertResult.insertedId){
                        Swal.fire({
                            title: 'Successfully inserted',
                            showClass: {
                              popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          })
                    }
                })
                
            }
    }
    return (
        <>
            <form className="m-10" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-neutral btn-sm mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 text-center">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-600">Transaction complete with id: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;