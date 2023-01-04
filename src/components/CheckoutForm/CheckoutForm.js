import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { COSTO_ENVIO } from '../../Utils';
import { CheckoutDetail } from '../CheckoutDetail/CheckoutDetail';
import {
  FormContent,
  Input,
  Label,
  PageWrapper,
  StyledInlineErrorMessage,
} from '../LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createOrder,
  purchaseInit,
} from '../../redux/features/orders/ordersSlice';
import { clearCart } from '../../redux/features/cart/cartSlice';
import { useEffect } from 'react';
import { Spinner } from '../UI';

const CheckoutForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { purchased, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    if (purchased) {
      dispatch(purchaseInit());
      navigate('/ordenes-historial');
    }
  }, [purchased]);

  return (
    <PageWrapper>
      <FormContent>
        <Formik
          initialValues={{ domicilio: '', localidad: '' }}
          validationSchema={Yup.object().shape({
            domicilio: Yup.string()
              .min(3, 'Introduce un domicilio valido')
              .required('Por favor ingresa un domicilio'),
            localidad: Yup.string()
              .min(3, 'Introduce una localidad valida')
              .required('Por favor ingresa una Localidad'),
          })}
          onSubmit={(values) => {
            const orderData = {
              userId: currentUser.id,
              shippingDetails: {
                domicilio: values.domicilio,
                localidad: values.localidad,
              },
              items: [...cartItems],
              shippingPrice: COSTO_ENVIO,
              subTotal: subTotal,
              total: COSTO_ENVIO + subTotal,
            };

            dispatch(createOrder(orderData));
            dispatch(clearCart());
          }}
        >
          {({ values, errors, touched, handleSubmit, valid }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Label
                  htmlFor="domicilio"
                  showError={errors.domicilio && touched.domicilio}
                >
                  Domicilio
                  <Input
                    type="text"
                    name="domicilio"
                    autoComplete="domicilio"
                    placleholder="Tu Domicilio"
                  ></Input>
                </Label>
                {errors.domicilio && touched.domicilio && (
                  <StyledInlineErrorMessage>
                    {errors.domicilio}
                  </StyledInlineErrorMessage>
                )}
                <Label
                  htmlFor="Localidad"
                  showError={errors.localidad && touched.localidad}
                >
                  Localidad
                  <Input
                    type="text"
                    name="localidad"
                    autoComplete="localidad"
                    placleholder="Tu localidad"
                  ></Input>
                </Label>
                {errors.localidad && touched.localidad && (
                  <StyledInlineErrorMessage>
                    {errors.localidad}
                  </StyledInlineErrorMessage>
                )}
                <CheckoutDetail
                  isValid={valid}
                  subTotal={subTotal}
                  envio={COSTO_ENVIO}
                />
                {loading && <Spinner />}
              </Form>
            );
          }}
        </Formik>
      </FormContent>
    </PageWrapper>
  );
};

export default CheckoutForm;
