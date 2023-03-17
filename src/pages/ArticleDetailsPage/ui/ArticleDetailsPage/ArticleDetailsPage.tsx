import { ArticleDetails } from 'entities/Article';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return (
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {t('article not found')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
