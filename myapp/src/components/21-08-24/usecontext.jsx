import React, { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import api from '../axios';

export const Authcon = createContext();

// Reducer function to handle user login and loading state
function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, loading: false };  // Set user and loading false
        case "loading":
            return { ...state, loading: true };  // Set loading true
        default:
            return state;
    }
}

// Initial state with user as null and loading as true initially
const initialState = { user: null, loading: true };

const Usecontext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getUserData() {
            dispatch({ type: "loading" }); // Set loading true at the start

            try {
                const response = await api.post("/auth/getUserData");
                if (response.data.success) {
                    console.log("User data fetched successfully:", response.data);
                    dispatch({ type: "login", payload: response.data.UserData });  // Update user data and set loading to false
                } else {
                    console.log("Failed to fetch user data.");
                    dispatch({ type: "loading" });  // Keep loading true if fetch fails
                }
            } catch (error) {
                console.log("Error fetching user data:", error);
                dispatch({ type: "loading" });  // Keep loading true if there's an error
            }
        }

        getUserData();  // Fetch user data on component mount
    }, []);

    return (
        <Authcon.Provider value={{ state, dispatch }}>
            {children}
        </Authcon.Provider>
    );
};

export default Usecontext;