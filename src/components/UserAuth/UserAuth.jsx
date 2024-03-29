import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import { SignInLink } from './UserAuth.styled.jsx';

import svgSprite from '../../assets/sprite.svg';

function UserAuth() {
  const { t } = useTranslation();

  return (
    <SignInLink to="/signin">
      {t('signin')}
      <svg width={28} height={28}>
        <use href={`${svgSprite}#icon-user`} />
      </svg>
    </SignInLink>
  );
}

export default UserAuth;
