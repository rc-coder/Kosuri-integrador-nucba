import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  PageWrapper,
  Label,
  Input,
  StyledInlineErrorMessage,
  Submit,
  FormContent,
  Alink,
  ButtonsContainer,
  GoogleButton,
  GoogleIcon,
  ToggleTextContainer,
} from '../components/LoginForm/LoginForm';
import GoogleLogo from '../assets/google_icon.svg';
import {
  auth,
  createUserProfileDoc,
  signInWithGoogle,
} from '../Firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);

  if (currentUser) {
    navigate(-1);
  }

  return (
    <PageWrapper>
      <hr />
      <FormContent>
        <Formik
          initialValues={
            !loginMode
              ? { email: '', password: '', displayName: '' }
              : { email: '', password: '' }
          }
          validationSchema={
            !loginMode
              ? Yup.object().shape({
                  displayName: Yup.string()
                    .min(3, '¡Tu nombre es muy corto!')
                    .required('Por favor ingresa un nombre'),
                  email: Yup.string()
                    .email('Ingresa un email valido')
                    .required('Por favor ingresa un email'),
                  password: Yup.string()
                    .min(6, 'Debe Contener al menos 6 caracteres')
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])/,
                      'Debe contener al menos una mayúscula, una minúscula, un número y un carater especial'
                    )
                    .required('Ingresa una contraseña'),
                })
              : Yup.object().shape({
                  email: Yup.string()
                    .email('Ingresa un email valido')
                    .required('Por favor ingresa un email'),
                  password: Yup.string()
                    .min(6, 'Debe Contener al menos 6 caracteres')
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])/,
                      'Debe contener al menos una mayúscula, una minúscula, un número y un carater especial'
                    )
                    .required('Ingresa una contraseña'),
                })
          }
          onSubmit={async (values) => {
            if (loginMode) {
              try {
                await signInWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                ).then((response) => {
                  const { user } = response;
                });
              } catch (error) {
                console.log(error);
              }
            } else {
              try {
                const { user } = await createUserWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );

                await createUserProfileDoc(user, {
                  displayName: values.displayName,
                });
              } catch (error) {
                console.log(error);
              }
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            validating,
            valid,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {!loginMode && (
                  <Label
                    htmlFor="name"
                    showError={errors.displayName && touched.displayName}
                  >
                    Nombre
                    <Input
                      type="text"
                      name="displayName"
                      autoComplete="name"
                      placeholder="Tu nombre"
                    ></Input>
                  </Label>
                )}
                {errors.displayName && touched.displayName && (
                  <StyledInlineErrorMessage>
                    {errors.displayName}
                  </StyledInlineErrorMessage>
                )}
                <Label
                  htmlFor="email"
                  showError={errors.email && touched.email}
                >
                  Email
                  <Input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Tu email"
                  ></Input>
                </Label>
                {errors.email && touched.email && (
                  <StyledInlineErrorMessage>
                    {errors.email}
                  </StyledInlineErrorMessage>
                )}
                <Label
                  htmlFor="password"
                  showError={errors.password && touched.password}
                >
                  Contraseña
                  <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  ></Input>
                </Label>
                {errors.password && touched.password && (
                  <StyledInlineErrorMessage>
                    {errors.password}
                  </StyledInlineErrorMessage>
                )}
                <ButtonsContainer>
                  <Submit type="submit">
                    {!loginMode ? 'Registrar' : 'Ingresar'}
                  </Submit>
                  <GoogleButton type="button" onClick={signInWithGoogle}>
                    <GoogleIcon src={GoogleLogo} />
                    Ingresar con Google
                  </GoogleButton>
                </ButtonsContainer>
                <ToggleTextContainer>
                  <span>
                    {!loginMode
                      ? 'Ya tienes una cuenta? '
                      : 'Aun no tienes una cuenta?'}
                  </span>
                  <Alink onClick={() => setLoginMode((prevMode) => !prevMode)}>
                    {!loginMode ? 'Ingresa aqui' : 'Registrate aqui'}
                  </Alink>
                </ToggleTextContainer>
              </Form>
            );
          }}
        </Formik>
      </FormContent>
      <hr />
    </PageWrapper>
  );
};

export default Login;
