import { useForm } from 'react-hook-form';

const AuthForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
    //dispatch(registerThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register('name')}
          type="text"
          placeholder="Enter your name"
        />

        <input
          {...register('password')}
          type="text"
          placeholder="Enter your password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default AuthForm;
