import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix';

import { paramsForNotify } from '../../constants/notifications';

import { forgotPassword } from '../../redux/User/UserThunks';
import { selectUser } from '../../redux/User/selectors';

import TextInput from '../../components/TextInput';
import Container from '../../components/Container/Container.jsx';

import { StyledButton } from './ForgotPassword.styled.js';
import { LabelStyled } from '../../components/AuthForm/AuthForm.styled.js';
import { WraperForm, Wrapper } from '../SignUp/SignUp.styled';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const user = useSelector(selectUser);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const schema = yup
    .object()
    .shape({
      email: yup.string().required(t('forgotPass.email')),
    })
    .required();

  const onSubmit = (data) => {
    dispatch(forgotPassword(data.email))
      .unwrap()
      .then(() => {
        Notify.success(t('forgotPass.success-msg'), {
          timeout: 3000,
          width: '300px',
          height: '200px',
          fontSize: '14px',
          position: 'center-top',
        });
      })
      .catch((err) => {
        Notify.warning(err);
      });
    if (!user) {
      Notify.warning(t('forgotPass.wrong-email-msg'), paramsForNotify);
      return;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Wrapper>
        <WraperForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <LabelStyled>{t('forgotPassword')}</LabelStyled>
              <TextInput
                error={errors.email}
                register={register}
                id="email"
                width={isDesktop ? 384 : isTablet ? 336 : 280}
                type="email"
                placeholder={t('email')}
              />
            </label>

            <StyledButton
              $width={isDesktop ? '384px' : isTablet ? '336px' : '280px'}
              type="submit"
            >
              {t('send')}
            </StyledButton>
          </form>
        </WraperForm>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
