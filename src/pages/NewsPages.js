import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPages = () => {
    const params = useParams();
    // useParams : 파라미터를 처리할 때 사용하는 Hook
    const category = params.category || 'all';

    return (
        <div>
            <Categories />
            <NewsList category={category} />
        </div>
    );
};

export default NewsPages;