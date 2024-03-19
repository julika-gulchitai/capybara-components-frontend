import {ThreeDots} from 'react-loader-spinner';
import { Loading } from './Loader.styled';
import theme from '../../css/VariablesJSX'


export const Loader = ({ visible }) => {
  return (
    <Loading>
      <ThreeDots
        height="100"
        width="100"
        visible={visible}
        color={theme.colors.blue}
        ariaLabel="dots-loading"
      />
    </Loading>
  );
};
