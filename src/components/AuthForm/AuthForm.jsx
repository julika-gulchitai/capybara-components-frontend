import { useForm } from 'react-hook-form';
import { StyledInput } from './AuthForm.styled';

const AuthForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
    //dispatch(registerThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Enter your name</label>
        <StyledInput {...register('name')} type="text" />
        <label htmlFor="password1">Enter your password</label>
        <StyledInput {...register('password1')} type="text" />
        <label htmlFor="password2">Repeat password</label>
        <StyledInput {...register('password2')} type="text" />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default AuthForm;
