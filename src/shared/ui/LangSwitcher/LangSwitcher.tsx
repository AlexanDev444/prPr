import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={translate}
            className={classNames('', {}, [className])}
        >
            {t('language')}
        </Button>
    );
};
