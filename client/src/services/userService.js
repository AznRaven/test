import { customAxios, customAxiosWithAuth } from './api';

export async function userLogin(user) {
    try {
        const response = await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            alert(errorData.error);
            console.log('a');
            return null;
        }

        const data = await response.json();
        return data.token;
    } catch (err) {
        console.log(err);
        alert('An error occurred while logging in.');
        console.log('a');
        return null;
    }
}

export async function userRegister(user) {
    try {
        const response = await fetch('http://localhost:8081/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            alert(errorData.error);
            return null;
        }

        const data = await response.json();
        return data.token;
    } catch (err) {
        console.log(err);
        alert('An error occurred while registering.');
        return null;
    }
}

export async function userInfo() {
    try {
        const response = await fetch('http://localhost:8081/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(errorData);
            localStorage.removeItem('token');
            alert(errorData.error);
            return {};
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        localStorage.removeItem('token');
        alert('An error occurred while fetching user information.');
        return {};
    }
}
