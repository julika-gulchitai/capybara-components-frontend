import React, { useEffect, useRef, useState } from 'react';
import {
  AvatarWrapper,
  AvatarRow,
  Form,
  GenderLabel,
  GenderRadio,
  InfoWrapper,
  LabelText,
  LeftContainer,
  PasswordLabelText,
  RightContainer,
  SaveButton,
  SettingsContainer,
} from './SettingModal.styled.jsx';
import defaultAvatar from '../../assets/images/default_avatar.webp';
import PasswordInput from '../PasswordInput.jsx';
import svgSprite from '../../assets/sprite.svg';
import { FormControlLabel, Radio } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '../TextInput.jsx';
import { useMediaQuery } from 'react-responsive';
import Notiflix from 'notiflix';
import theme from '../../css/VariablesJSX.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/User/selectors.js';
import { updateUserThunk } from '../../redux/User/UserThunks.js';
import { paramsForNotify } from '../../constants/notifications.js';

function SettingModal({ close }) {
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();
  const { username, email, gender, avatarURL } = useSelector(selectUser);
  const [photo, setPhoto] = useState(null);

  const userData = new FormData();

  useEffect(() => {
    if (avatarURL) {
      setAvatar(avatarURL);
    }
  }, [avatarURL]);

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const schema = yup
    .object({
      username: yup
        .string()
        .test('len', 'Max length 32 characters', (val) => val?.length <= 32),
      email: yup
        .string()
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please enter valid e-mail'
        ),
      new_password: yup
        .string()
        .test(
          'len',
          'Must be at least 8 characters',
          (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
        ),
      repeat_new_password: yup
        .string()
        .oneOf(
          [yup.ref('new_password'), null],
          "Passwords don't match, please try again."
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: gender,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return;
    }

    const urlImage = URL.createObjectURL(file);
    setAvatar(urlImage);
    setPhoto(file);
  }

  async function onSubmit(data) {
    if (data.username !== username) {
      userData.append('username', data.username);
    }

    if (data.email !== email) {
      userData.append('email', data.email);
    }

    if (data.gender !== gender) {
      userData.append('gender', data.gender);
    }

    if (data.old_password) {
      if (!data.new_password) {
        Notiflix.Notify.warning('Please enter new password', paramsForNotify);
        return;
      }

      if (!data.repeat_new_password) {
        Notiflix.Notify.warning('Please repeat new password', paramsForNotify);
        return;
      }

      if (data.new_password !== data.repeat_new_password) {
        Notiflix.Notify.warning(
          'New password and repeated password are different',
          paramsForNotify
        );
        return;
      }

      userData.append('password', data.old_password);
      userData.append('new_password', data.new_password);
    }

    if (photo) {
      userData.append('avatarURL', photo);
    }

    dispatch(updateUserThunk(userData))
      .unwrap()
      .then(() => {
        close();
      })
      .catch((error) => {
        console.log(error);
        Notiflix.Notify.failure(error.message, paramsForNotify);
      });
  }

  return (
    <SettingsContainer>
      <h2>Setting</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <LabelText>Your photo</LabelText>
          <AvatarRow>
            <AvatarWrapper>
              <img
                src={avatar ? avatar : defaultAvatar}
                alt="avatar"
                width={80}
                height={80}
              />
            </AvatarWrapper>
            <button type="button" onClick={handleClick}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#icon-upload`} />
              </svg>
              Upload a photo
            </button>
            <input
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
              name="avatar"
            />
          </AvatarRow>
        </div>

        <InfoWrapper>
          <LeftContainer>
            <GenderLabel>
              <LabelText>Your gender identity</LabelText>
              <Controller
                rules={{ required: true }}
                control={control}
                name="gender"
                render={({ field }) => (
                  <GenderRadio
                    {...field}
                    sx={{
                      '&.MuiFormGroup-row': {
                        gap: '24px',

                        '& span': {
                          fontWeight: 400,
                        },
                      },
                    }}
                    row
                    aria-labelledby="gender select"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Woman"
                      labelPlacement="end"
                      sx={{
                        '&.Mui-checked': {
                          color: theme.colors.blue,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Man"
                      labelPlacement="end"
                      sx={{
                        '&.Mui-checked': {
                          color: theme.colors.blue,
                        },
                      }}
                    />
                  </GenderRadio>
                )}
              />
            </GenderLabel>
            <label>
              <LabelText>Your name</LabelText>
              <TextInput
                error={errors.username}
                register={register}
                id="username"
                width={isTabletOrDesktop ? 392 : '100%'}
                defaultValue={username}
                placeholder="Name"
                type="text"
              />
            </label>
            <label>
              <LabelText>E-mail</LabelText>
              <TextInput
                error={errors.email}
                register={register}
                id="email"
                width={isTabletOrDesktop ? 392 : '100%'}
                type="email"
                defaultValue={email}
                placeholder="E-mail"
              />
            </label>
          </LeftContainer>

          <RightContainer>
            <h3>Password</h3>
            <label>
              <PasswordLabelText>Outdated password:</PasswordLabelText>
              <PasswordInput
                register={register}
                id="old_password"
                width={isTabletOrDesktop ? 392 : '100%'}
              />
            </label>
            <label>
              <PasswordLabelText>New Password:</PasswordLabelText>
              <PasswordInput
                error={errors.new_password}
                register={register}
                id="new_password"
                width={isTabletOrDesktop ? 392 : '100%'}
              />
            </label>
            <label>
              <PasswordLabelText>Repeat new password:</PasswordLabelText>
              <PasswordInput
                error={errors.repeat_new_password}
                register={register}
                id="repeat_new_password"
                width={isTabletOrDesktop ? 392 : '100%'}
              />
            </label>
          </RightContainer>
        </InfoWrapper>

        <SaveButton type="submit">Save</SaveButton>
      </Form>
    </SettingsContainer>
  );
}

export default SettingModal;
