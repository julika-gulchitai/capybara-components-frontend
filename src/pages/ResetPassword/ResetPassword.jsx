import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from '../../redux/User/UserThunks';
import { paramsForNotify } from '../../constants/notifications';
import { Notify } from 'notiflix';
import { useForm } from 'react-hook-form';
import { MarginBetween, WraperForm, Wrapper } from '../SignUp/SignUp.styled';
import PasswordInput from '../../components/PasswordInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from '../ForgotPassword/ForgotPassword.styled';
import { LabelStyled } from '../../components/AuthForm/AuthForm.styled';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const token = params.get('token');
  const id = params.get('id');

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const { t } = useTranslation();

  const schema = yup
    .object()
    .shape({
      new_password: yup
        .string()
        .min(8, t('resetPass.New password must be at least 8 characters'))
        .max(64)
        .required(t('resetPass.Password is required')),
      repeat_new_password: yup
        .string()
        .oneOf(
          [yup.ref('new_password'), null],
          t("resetPass.Passwords don't match, please try again.")
        )
        .min(8, t('resetPass.Password must be at least 8 characters'))
        .required(t('resetPass.Confirm password is required')),
    })
    .required();

  const onSubmit = (data) => {
    if (data.new_password !== data.repeat_new_password) {
      Notify.warning(
        'New password and repeated password are different',
        paramsForNotify
      );
      return;
    }
    const password = data.new_password;

    dispatch(resetPassword({ token: token, id: id, password: password }))
      .unwrap()
      .then(() => {
        Notify.success('Password was changed');
        navigate('/signin');
      })
      .catch((error) => {
        Notify.failure(error.message, paramsForNotify);
      });
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
    <Wrapper>
      <WraperForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MarginBetween></MarginBetween>
          <LabelStyled>{t('resetPass.Enter your new password')}:</LabelStyled>
          <PasswordInput
            error={errors.new_password}
            register={register}
            id="new_password"
            width={isDesktop ? 384 : isTablet ? 336 : 280}
          />
          <LabelStyled>{t('settingModal.Repeat new password')}:</LabelStyled>
          <PasswordInput
            error={errors.repeat_new_password}
            register={register}
            id="repeat_new_password"
            width={isDesktop ? 384 : isTablet ? 336 : 280}
          />
          <StyledButton
            $width={isDesktop ? '384px' : isTablet ? '336px' : '280px'}
            type="submit"
          >
            {t('save')}
          </StyledButton>
        </form>
      </WraperForm>
    </Wrapper>
  );
};

export default ResetPassword;
