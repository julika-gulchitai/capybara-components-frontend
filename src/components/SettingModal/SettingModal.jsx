import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';

import { FormControlLabel, Radio } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import Notiflix from 'notiflix';

import { paramsForNotify } from '../../constants/notifications.js';

import { updateUserThunk } from '../../redux/User/UserThunks.js';
import { selectUser } from '../../redux/User/selectors.js';
import { selectTheme } from '../../redux/global/selectors.js';

import PasswordInput from '../PasswordInput.jsx';
import TextInput from '../TextInput.jsx';

import {
  AvatarWrapper,
  AvatarBlock,
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
  SettingsHeader,
} from './SettingModal.styled.jsx';
import { themeDark, themeLight } from '../../css/variablesTheme.js';

import defaultAvatar from '../../assets/images/default_avatar.webp';
import svgSprite from '../../assets/sprite.svg';

function SettingModal({ close }) {
  const { username, email, gender, avatarURL } = useSelector(selectUser);

  const currentTheme = useSelector(selectTheme);
  const theme = currentTheme === 'dark' ? themeDark : themeLight;

  const dispatch = useDispatch();
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const userData = new FormData();

  const [avatar, setAvatar] = useState('');
  const [photo, setPhoto] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (avatarURL) {
      setAvatar(avatarURL);
    }
  }, [avatarURL]);

  const schema = yup
    .object({
      username: yup
        .string()
        .test(
          'len',
          t('settingModal.Max length 32 characters'),
          (val) => val?.length <= 32
        ),
      email: yup
        .string()
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          t('settingModal.Please enter valid e-mail')
        ),
      new_password: yup
        .string()
        .test(
          'len',
          t('settingModal.Must be at least 8 characters'),
          (val) => (val.length >= 8 && val.length <= 64) || val.length === 0
        ),
      repeat_new_password: yup
        .string()
        .when('new_password', (new_password, field) =>
          new_password
            ? field.oneOf(
                [yup.ref('new_password')],
                t("settingModal.Passwords don't match!")
              )
            : field
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
      Notiflix.Notify.warning(
        t('settingModal.Only .jpeg or .png files!'),
        paramsForNotify
      );
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
        Notiflix.Notify.warning(
          t('settingModal.Please enter new password'),
          paramsForNotify
        );
        return;
      }

      if (!data.repeat_new_password) {
        Notiflix.Notify.warning(
          t('settingModal.Please repeat new password'),
          paramsForNotify
        );
        return;
      }

      if (data.new_password !== data.repeat_new_password) {
        Notiflix.Notify.warning(
          t('settingModal.New password and repeated password are different'),
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
        Notiflix.Notify.failure(error, paramsForNotify);
      });
  }

  return (
    <SettingsContainer>
      <SettingsHeader>
        <h2>{t('settingModal.Setting')}</h2>
      </SettingsHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <LabelText>{t('settingModal.Your photo')}</LabelText>
          <AvatarBlock>
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
              {t('settingModal.Upload a photo')}
            </button>
            <input
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
              name="avatar"
            />
          </AvatarBlock>
        </div>

        <InfoWrapper>
          <LeftContainer>
            <GenderLabel>
              <LabelText>{t('settingModal.Your gender identity')}</LabelText>
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
                      label={t('woman')}
                      labelPlacement="end"
                      sx={{
                        '&.Mui-checked': {
                          color: theme.colors.primaryBlue,
                        },
                      }}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={t('man')}
                      labelPlacement="end"
                      sx={{
                        '&.Mui-checked': {
                          color: theme.colors.primaryBlue,
                        },
                      }}
                    />
                  </GenderRadio>
                )}
              />
            </GenderLabel>
            <label>
              <LabelText>{t('settingModal.Your name')}</LabelText>
              <TextInput
                error={errors.username}
                register={register}
                id="username"
                width={isTabletOrDesktop ? 392 : '100%'}
                defaultValue={username}
                placeholder={t('settingModal.Name')}
                type="text"
              />
            </label>
            <label>
              <LabelText>{t('email')}</LabelText>
              <TextInput
                error={errors.email}
                register={register}
                id="email"
                width={isTabletOrDesktop ? 392 : '100%'}
                type="email"
                defaultValue={email}
                placeholder={t('email')}
              />
            </label>
          </LeftContainer>

          <RightContainer>
            <h3>{t('password')}</h3>
            <label>
              <PasswordLabelText>
                {t('settingModal.Outdated password')}:
              </PasswordLabelText>
              <PasswordInput
                register={register}
                id="old_password"
                width={isTabletOrDesktop ? 392 : '100%'}
                placeholder={t('password')}
              />
            </label>
            <label>
              <PasswordLabelText>
                {t('settingModal.New Password')}:
              </PasswordLabelText>
              <PasswordInput
                error={errors.new_password}
                register={register}
                id="new_password"
                width={isTabletOrDesktop ? 392 : '100%'}
                placeholder={t('password')}
              />
            </label>
            <label>
              <PasswordLabelText>
                {t('settingModal.Repeat new password')}:
              </PasswordLabelText>
              <PasswordInput
                error={errors.repeat_new_password}
                register={register}
                id="repeat_new_password"
                width={isTabletOrDesktop ? 392 : '100%'}
                placeholder={t('password')}
              />
            </label>
          </RightContainer>
        </InfoWrapper>

        <SaveButton type="submit">{t('save')}</SaveButton>
      </Form>
    </SettingsContainer>
  );
}

export default SettingModal;
