import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import {
	color_light,
	shadow,
	FlexFunc,
	Input,
	header_font,
	color_primary, tablet, mobile
} from '../../styles';

const LoginContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	background: ${color_primary};
	width: 550px;
	height: 400px;
	border-radius: 2rem;
	box-shadow: ${shadow};
  color: ${color_light};
  @media ${tablet} {
     margin-top: 2rem;
   }
   @media ${mobile} {
     width: 90%;
   }

	form {
		width: 100%;
		${FlexFunc('column', 'space-evenly', 'center')};

		input {
			${Input('60%')};
			margin-bottom: 2rem;
			height: 2rem;
		}
	}
`;

// const FormButton = styled.div`
// 	${Button(color_light, color_dark)};
// 	border: 2px solid ${color_dark};
// 	width: 50%;
// `;

const LoginFormHeader = styled.h3`
	font-size: 2rem;
	font-family: ${header_font};
`;

const RegistrationForm = () => {
	return (
		<LoginContainer>
			<LoginFormHeader>Join Us</LoginFormHeader>
			<Form>
				<Field type="text" name="username" placeholder="Username" />

				<Field type="password" name="password" placeholder="Password" />

				<button type="submit">Sign Up</button>
			</Form>
		</LoginContainer>
	);
};

const registrationFormValidationSchema = Yup.object().shape({
	username: Yup.string()
		.min(5, 'Username must be 5 characters or longer.')
		.required('Username is required.'),
	password: Yup.string()
		.min(6, 'Password must be 6 characters or longer.')
		.required('Password is required.')
});

const FormikRegistrationForm = withFormik({
	mapPropsToValues() {
		return {
			username: '',
			password: ''
		};
	},
	validationSchema: registrationFormValidationSchema,
	handleSubmit(values, { props, resetForm }) {
		props.registerUser(values);
		resetForm();
	}
})(RegistrationForm);

export default FormikRegistrationForm;
