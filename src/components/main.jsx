import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = ()=> {
  const { t } = useTranslation();
  return <p>{t('translated-paragraph')}</p>

}

export default Main;
