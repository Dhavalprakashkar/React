import React, { useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Authcon } from './21-08-24/usecontext';  // Make sure to import the context
import api from './axios';

const CreateProduct = () => {
    const { state } = useContext(Authcon);  // Access context state
    const navigate = useNavigate();

    const [productData, setProductData] = useState({
        productName: "",
        productCategory: "",
        productPrice: "",
        productQuantity: "",
        productImage: "",
    });

    const [userId, setUserId] = useState(null);

    // Once user data is available, update the local state
    useEffect(() => {
        if (state?.user?.userId) {
            setUserId(state.user.userId);
        }
    }, [state?.user]);  // Update when user data is available

    function handleChange(event) {
        setProductData({ ...productData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("userId:", userId);  // Log userId for debugging

        // If no userId, prompt the user to login
        if (!userId) {
            toast.error("Login first");
            navigate("/login");
            return;
        }

        // If any field is missing, show an error message
        if (!productData.productName || !productData.productCategory || !productData.productPrice || !productData.productQuantity || !productData.productImage) {
            toast.error("Fill all the fields");
            return;
        }

        try {
            // Send product data and userId to the server
            const response = await api.post("/products/create-product", { productData, userId });

            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/view-products");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        }
    }

    // If data is still loading, show a loading message
    if (state.loading) {
        return <div>Loading user data... Please wait.</div>;
    }

    return (
        <div style={{ fontSize: "20px", marginTop: "50px", marginLeft: "300px", border: "1px solid black", width: "50%", height: "400px" }}>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>Product Name</label><br />
                <input onChange={handleChange} required type='text' placeholder='Enter ProductName..' name="productName" /><br />
                <label>Category</label><br />
                <input onChange={handleChange} required type='text' placeholder='Enter Category...' name="productCategory" /><br />
                <label>Price</label><br />
                <input onChange={handleChange} required type="number" placeholder='Enter Price..' name="productPrice" /><br />
                <label>Quantity</label><br />
                <input onChange={handleChange} required type='number' placeholder='Enter Quantity...' name="productQuantity" /><br />
                <label>Image</label><br />
                <input onChange={handleChange} required type="url" placeholder='Enter URL...' name="productImage" /><br />
                <input type='submit' value="Create" />
            </form>
        </div>
    );
};

export default CreateProduct;