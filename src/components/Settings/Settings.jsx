import React, {useRef, useState} from 'react';
import {
  Avatar,
  AvatarRow,
  Form, GenderLabel, GenderRadio,
  InfoWrapper,
  LeftContainer,
  RightContainer, SaveButton,
  SettingsContainer
} from './Settings.styled';
import defaultAvatar from '../../assets/images/default_avatar.webp';
import PasswordInput from '../PasswordInput.jsx';
import svgSprite from '../../assets/sprite.svg';
import {FormControlLabel, Radio} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import TextInput from '../TextInput.jsx';
import { useMediaQuery } from 'react-responsive';


function Settings({close}) {
  const user = {name: 'Alejandro', email: 'alejandro@hmail.com', gender: 'man'};

  const [avatar, setAvatar] = useState('');
  const {name, email, gender} = user;
  const userData = {};

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const schema = yup
    .object({
      name: yup
        .string()
        .test('len', 'Mux length 32 characters', val => (val?.length <= 32)),
      email: yup
        .string()
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'Please enter valid e-mail'),
      new_password: yup.string().test('len', 'Must be at least 8 characters', val => ((val.length >= 8 && val.length <= 64) || val.length === 0))
    })
    .required();

  const {register, handleSubmit, control, formState: {errors}} = useForm({
    defaultValues: {
      gender: gender
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const inputRef = useRef(null);

  function handleClick(event) {
    console.log(event.target);
    inputRef.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return;
    }

    const urlImage = URL.createObjectURL(file);
    console.log(urlImage);

    setAvatar(urlImage);
    userData.avatar = file;
  }

  async function onSubmit(data) {

    if (data.name !== name) {
      userData.name = data.name;
    }

    if (data.email !== email) {
      userData.email = data.email;
    }

    /*changeUserData(userData)*/

    close();
  }

  return (
    <SettingsContainer>
      <h2>Setting</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Your photo</span>
          <AvatarRow>
            <Avatar>
              <img
                src={avatar ? avatar : defaultAvatar}
                alt='avatar'
                width={80}
                height={80}
              />
            </Avatar>
            <button type='button' onClick={handleClick}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#icon-upload`}/>
              </svg>
              Upload a photo
            </button>
            <input ref={inputRef} type='file' onChange={handleFileChange} name='avatar'/>
          </AvatarRow>
        </label>

        <InfoWrapper>
          <LeftContainer>
            <GenderLabel>
              <span>Your gender identity</span>
              <Controller
                rules={{required: true}}
                control={control}
                name='gender'
                render={({field}) => (
                  <GenderRadio {...field}
                               sx={{
                                 '&.MuiFormGroup-row': {
                                   gap: '24px',

                                   '& span': {
                                     fontWeight:400
                                   }
                                 }
                               }}
                               row
                               aria-labelledby='gender select'
                  >
                    <FormControlLabel value='woman' control={<Radio/>} label='Woman' labelPlacement='end' sx={{
                      '&.Mui-checked': {
                        color: '#407BFF'
                      }
                    }}/>
                    <FormControlLabel value='man' control={<Radio/>} label='Man' labelPlacement='end' sx={{
                      '&.Mui-checked': {
                        color: '#407BFF'
                      }
                    }}/>
                  </GenderRadio>
                )}
              />
            </GenderLabel>
            <label>
              <span>Your name</span>
              <TextInput
                error={errors.name}
                register={register}
                id='name'
                width={isTabletOrDesktop? 392 : '100%'}
                defaultValue={name}
                placeholder='Name'
                type='text'/>
            </label>
            <label>
              <span>E-mail</span>
              <TextInput
                error={errors.email}
                register={register}
                id='email'
                width={isTabletOrDesktop? 392 : '100%'}
                type='email'
                defaultValue={email}
                placeholder='E-mail'/>
            </label>
          </LeftContainer>

          <RightContainer>
            <h3>Password</h3>
            <label>
              <span>Outdated password:</span>
              <PasswordInput
                register={register}
                id='old_password'
                width={isTabletOrDesktop? 392 : '100%'}/>
            </label>
            <label>
              <span>New Password:</span>
              <PasswordInput
                error={errors.new_password}
                register={register}
                id='new_password'
                width={isTabletOrDesktop? 392 : '100%'}/>
            </label>
            <label>
              <span>Repeat new password:</span>
              <PasswordInput
                error={errors.repeat_new_password}
                register={register}
                id='repeat_new_password'
                width={isTabletOrDesktop? 392 : '100%'}/>
            </label>
          </RightContainer>
        </InfoWrapper>

        <SaveButton type='submit' >Save</SaveButton>
      </Form>

    </SettingsContainer>
  );
}

export default Settings;

/*
my.svtoy@ukr.net
CAPYBARA-components-8*/
