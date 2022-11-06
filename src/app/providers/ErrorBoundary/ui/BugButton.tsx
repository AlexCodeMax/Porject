
import {Button} from 'shared/ui/Button/Button';

import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

export const BugButton = () => {

    const {t} = useTranslation();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error){
            throw new Error();
        }
    },[error]);


    const throwBtn = () => {
        setError(true);
    };

    return (
        <Button onClick={throwBtn}>
            {t('throw error')}
        </Button>

    );
};
