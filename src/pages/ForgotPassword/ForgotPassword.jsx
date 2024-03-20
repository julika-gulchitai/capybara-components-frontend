import PasswordInput from '../../components/PasswordInput';
import { useMediaQuery } from 'react-responsive';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix';
import { forgotPassword, updateUserThunk } from '../../redux/User/UserThunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/User/selectors';
import {
  LabelText,
  PasswordLabelText,
  RightContainer,
  SaveButton,
} from '../../components/SettingModal/SettingModal.styled';
import { paramsForNotify } from '../../constants/notifications';
import { WrapForm } from '../../components/AuthForm/AuthForm.styled';
import { WraperForm, Wrapper } from '../SignUp/SignUp.styled';
import TextInput from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const userData = new FormData();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const { username, email } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const schema = yup
    .object()
    .shape({
      email: yup.string().required('Email is required'),
      //   old_password: yup
      //     .string()
      //     .min(8, 'Password must be at least 8 characters')
      //     .max(64)
      //     .required('Password is required'),
      //   new_password: yup
      //     .string()
      //     .min(8, 'New password must be at least 8 characters')
      //     .max(64)
      //     .required('Password is required'),

      //   repeat_new_password: yup
      //     .string()
      //     .oneOf(
      //       [yup.ref('new_password'), null],
      //       "Passwords don't match, please try again."
      //     )
      //     .min(8, 'Password must be at least 8 characters')
      //     .required('Confirm password is required'),
    })
    .required();

  const onSubmit = (data) => {
    dispatch(forgotPassword(data.email))
      .unwrap()
      .then(() => {
        Notify.success('Password reset link is sent to your email!', {
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

    console.log(user);
    if (!user) {
      Notify.warning('Please enter your correct email', paramsForNotify);
      return;
    } else if (data.old_password) {
      console.log(user);
      //   if (!data.new_password) {
      //     Notify.warning('Please enter new password', paramsForNotify);
      //     return;
      //   }

      //   if (!data.repeat_new_password) {
      //     Notify.warning('Please repeat new password', paramsForNotify);
      //     return;
      //   }

      //   if (data.new_password !== data.repeat_new_password) {
      //     Notify.warning(
      //       'New password and repeated password are different',
      //       paramsForNotify
      //     );
      //     return;
      //   }

      //   userData.append('password', data.old_password);
      //   userData.append('new_password', data.new_password);
    }
    // console.log(userData)
    //     dispatch(updateUserThunk(userData))
    //       .unwrap()
    //       .then(() => {
    //         close();
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         Notify.failure(error.message, paramsForNotify);
    //       });
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
          <RightContainer>
            <h3>{t('password')}</h3>
            <label>
              <PasswordLabelText>{t('email')}:</PasswordLabelText>
              <br></br>
              <TextInput
                error={errors.email}
                register={register}
                id="email"
                width={isDesktop ? 384 : isTablet ? 336 : 280}
                type="email"
                placeholder={t('email')}
              />
            </label>
            {/* <label>
              <PasswordLabelText>Outdated password:</PasswordLabelText>
              <PasswordInput
                register={register}
                id="old_password"
                width={isDesktop ? 384 : isTablet ? 336 : 280}
              />
            </label>
            <label>
              <PasswordLabelText>New Password:</PasswordLabelText>
              <PasswordInput
                error={errors.new_password}
                register={register}
                id="new_password"
                width={isDesktop ? 384 : isTablet ? 336 : 280}
              />
            </label>
            <label>
              <PasswordLabelText>Repeat new password:</PasswordLabelText>
              <PasswordInput
                error={errors.repeat_new_password}
                register={register}
                id="repeat_new_password"
                width={isDesktop ? 384 : isTablet ? 336 : 280}
              />
            </label> */}
            <SaveButton type="submit">{t('save')}</SaveButton>
          </RightContainer>
        </form>
      </WraperForm>
    </Wrapper>
  );
};

export default ForgotPassword;
