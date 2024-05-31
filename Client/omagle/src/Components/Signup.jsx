import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        seeking_person: '',
        ethnicity: '',
        religion: '',
        country: '',
        city: '',
        state: '',
        language: '',
        checkMeOut: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'checkMeOut') {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const signup = (objToSend) => {
        axios.post("http://localhost:3000/api/signup", objToSend)
            .then((res) => {
                console.log(res);
                navigate('/login')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let sendToObj = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
            age: formData.age,
            gender: formData.gender,
            seeking_person: formData.seeking_person,
            ethnicity: formData.ethnicity,
            religion: formData.religion,
            country: formData.country,
            city: formData.city,
            state: formData.state,
            language: formData.language,
            checkMeOut: formData.checkMeOut
        };

        signup(sendToObj);

        if (validateForm()) {
            console.log(formData);
            // Clear the form
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                age: '',
                gender: '',
                seeking_person: '',
                ethnicity: '',
                religion: '',
                country: '',
                city: '',
                state: '',
                language: '',
                checkMeOut: false
            });
        }
    };
    return (
        <>
        <div className="max-w-[80%] m-auto pt-20">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        isInvalid={!!errors.first_name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.first_name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        isInvalid={!!errors.last_name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.last_name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Enter age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Enter your age between 18 - 99
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select gender</Form.Label>
                    <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        isInvalid={!!errors.gender}
                    >
                        <option value="">Select...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.gender}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Seeking Person</Form.Label>
                    <Form.Select
                        name="seeking_person"
                        value={formData.seeking_person}
                        onChange={handleChange}
                        isInvalid={!!errors.seeking_person}
                    >
                        <option value="">Select...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.seeking_person}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEthnicity">
                    <Form.Label>Ethnicity</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ethnicity"
                        name="ethnicity"
                        value={formData.ethnicity}
                        onChange={handleChange}
                        isInvalid={!!errors.ethnicity}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.ethnicity}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicReligion">
                    <Form.Label>Religion</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Religion"
                        name="religion"
                        value={formData.religion}
                        onChange={handleChange}
                        isInvalid={!!errors.religion}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.religion}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        isInvalid={!!errors.country}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.country}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.city}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.state}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLanguage">
                    <Form.Label>Language</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Language"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        isInvalid={!!errors.language}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.language}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Check me out"
                        name="checkMeOut"
                        checked={formData.checkMeOut}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
        </>
    )
}

export default Signup