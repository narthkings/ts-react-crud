import { useState } from 'react'
import { Row, Col, Label, FormGroup, Input, Button } from 'reactstrap'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { FormValues } from '../../types/types'

export const Adduser = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (values: FormValues) => {
        setLoading(true)

        console.log(values);
        setLoading(false)

    }

    const formInputs: FormValues = {
        name: '',
        age: 0,
        email: '',
        phoneNumber: '',
        country: '',
        state: '',
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const registerSchema = Yup.object().shape({
        name: Yup.string().required('Full name field is Required'),
        phoneNumber: Yup.string().required('Phone number field Required')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(11, 'Phone number must not be less than 11 characters')
            .max(11, 'Phone number must not be greater than 11 characters'),
        email: Yup.string().email('Invalid email address').required('Email field is Required'),
        age: Yup.number().required('Age field is Required'),
        country: Yup.string().required('Country field is Required'),
        state: Yup.string().required('State field is Required'),
    })

    return (
        <Formik validationSchema={registerSchema} onSubmit={handleSubmit} initialValues={formInputs}>
            {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                <Form onSubmit={handleSubmit} className="mx-5">
                    <Row className="mt-5">
                        <Col md={6}>
                            <FormGroup>
                                <Label for="fullname">Full Name</Label>
                                <Input name="name" bsSize="lg" type="text" id="fullname" value={values.name} placeholder="Enter Full Name" onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.name && touched.name && errors.name}</p>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input name="email" bsSize="lg" type="email" id="email" placeholder="Enter email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.email && touched.email && errors.email}</p>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input bsSize="lg" name="phoneNumber" type="text" id="phoneNumber" placeholder="Enter Phone number" value={values.phoneNumber} onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</p>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="age">Age</Label>
                                <Input bsSize="lg" name="age" type="text" id="age" value={values.age} placeholder="Enter Your age" onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.age && touched.age && errors.age}</p>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <FormGroup>
                                <Label for="country">Country</Label>
                                <Input bsSize="lg" name="country" type="text" id="country" value={values.country} placeholder="Enter Your Country" onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.country && touched.country && errors.country}</p>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="state">State</Label>
                                <Input bsSize="lg" type="text" name="state" id="state" value={values.state} placeholder="Enter Your state" onBlur={handleBlur} onChange={handleChange} />
                                <p className="text-danger fs-6">{errors.state && touched.state && errors.state}</p>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button type="submit" className="bg-success mt-3">
                       <span> {!loading ? "Create user" : "Processing" }</span>
                        {loading &&  <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

