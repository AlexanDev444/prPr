import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            return rejectWithValue('ERROR');
        }
    },
);
