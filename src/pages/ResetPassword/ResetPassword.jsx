import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from '../../redux/User/UserThunks';
import { paramsForNotify } from '../../constants/notifications';
import { Notify } from 'notiflix';
import { useForm } from 'react-hook-form';
import { WraperForm, Wrapper } from '../SignUp/SignUp.styled';
import { RightContainer } from '../HomePage/HomePage.styled';
import {
  PasswordLabelText,
  SaveButton,
} from '../../components/SettingModal/SettingModal.styled';
import PasswordInput from '../../components/PasswordInput';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const dispatch = useDispatch();

  const { token, id } = useParams();

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const schema = yup
    .object()
    .shape({
      old_password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(64)
        .required('Password is required'),
      new_password: yup
        .string()
        .min(8, 'New password must be at least 8 characters')
        .max(64)
        .required('Password is required'),
      repeat_new_password: yup
        .string()
        .oneOf(
          [yup.ref('new_password'), null],
          "Passwords don't match, please try again."
        )
        .min(8, 'Password must be at least 8 characters')
        .required('Confirm password is required'),
    })
    .required();

  const onSubmit = (data) => {
    if (data.old_password && data.new_password && data.repeat_new_password) {
      if (data.new_password !== data.repeat_new_password) {
        Notify.warning(
          'New password and repeated password are different',
          paramsForNotify
        );
        return;
      }

      dispatch(resetPassword(resetPassword({ token, id, ...data })))
        .unwrap()
        .then(() => {
          Notify.success('Password was changed');
        })
        .catch((error) => {
          console.error(error);
          Notify.failure(error.message, paramsForNotify);
        });
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
    <Wrapper>
      <WraperForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RightContainer>
            <h3>Password</h3>
            <label>
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
            </label>
            <SaveButton type="submit">Save</SaveButton>
          </RightContainer>
        </form>
      </WraperForm>
    </Wrapper>
  );
};

export default ResetPassword;
