
import {classNames} from 'shared/lib/classNames/classNames';
import cls from 'widgets/PageError/ui/ErrorPage.module.scss';
import {Button} from 'shared/ui/Button/Button';

import {useTranslation} from 'react-i18next';


interface ErrorPageProps {
    className?:string
}

export const ErrorPage = ({className}:ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>

    );
};
