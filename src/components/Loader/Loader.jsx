import { Blocks } from 'react-loader-spinner';
import { Loading } from './Loader.styled';
import { theme } from '../../css/VariablesJSX'


export const Loader = () => {
  return (
    <Loading>
      <Blocks
        height="80"
        width="80"
        color={theme.colors.blue}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Loading>
  );
};
