// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    color: #61dafb;
    font-weight: bolder;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d6311aeec95a42b6b56b655eb1d640ea`
        );
    }, [category])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             // 카테고리가 all일 시, 주소에 공백을 줘서 기본 카테고리로 이동할 수 있게 작업
    //             // 카테고리에 따라 주소창에 해당 카테고리 내용을 입력
    //             const response = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d6311aeec95a42b6b56b655eb1d640ea`,
    //             );
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [category])

    if (loading) {
        return <NewsListBlock>Wait For Seconds...</NewsListBlock>;
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>Error...</NewsListBlock>;
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map(
                article => (
                    <NewsItem key={article.url} article={article} />
                )
            )}
        </NewsListBlock>
    );
};

export default NewsList;