import axios from "axios";

//Login User
export async function loginUser(email, password) {
    const url = `https://accountmanagementbackend.onrender.com/api/auth/login`
    console.log(url)
    try {
        const response = await axios.post(url, JSON.stringify({
            "email": email,
            "password": password
        }),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        if (response.status === 200) {
            return response;
        }

    } catch (error) {
        console.log('Error', error)
    }
}

// Register User
export async function register(firstname, lastname, username, email, password) {
    const URL = 'https://accountmanagementbackend.onrender.com/api/auth/register';
    try {
        const response = await axios.post(
            URL,
            {
                username: username,
                email: email,
                password: password,
                firstName: firstname,
                lastName: lastname,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;

    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}


//Get user details by ID
export async function getUserByID(id) {
    const URL = `https://accountmanagementbackend.onrender.com/api/auth/users/${id}`
    try {
        const response = await axios.get(URL,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            }
        );
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

    } catch (error) {
        console.log('Error', error);
    }
}