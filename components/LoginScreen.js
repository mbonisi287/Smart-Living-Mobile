import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

function LoginScreen () {

    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });

    const handleChange = event => { setFormData ( { ...formData, [event.target.name] : event.target.password}); }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('https://localhost:44311/api/controller/login', formData );
            //alert("Login Successful" + JSON.stringify(response.data.adminRole));
            const username = response.data.userEmail;
            alert("Welcome - > " + JSON.stringify(response.data.userEmail));
            if(username != null){
                const token = response.data.userEmail;
                localStorage.setItem('key', JSON.stringify(token));

                const storedData = localStorage.getItem('key');
                const parsedData = JSON.parse(storedData);
                

                //setAuthToken(token);
                console.log("This is the token" + storedData);

                alert("Token is now set to - > " + parsedData);

                window.location.href = '/';

                console.log(JSON.stringify(response.data));
               
                Cookies.set('token', token, { expires: 7, secure: true });
               // console.log("token is being set");
            } else {
                console.log("Incorrect User credentials");
            }
        }
        catch(error){
            console.log("Could not post the Login Api");
        }
    }
    return (
        <SafeAreaView>
            <View>
                <Text> Log In Screen </Text>
            </View>

        </SafeAreaView>
    );
}

export default LoginScreen;