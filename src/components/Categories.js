import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../../node_modules/react-router-dom/index';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 768px;
    margin: 0 auto;
    margin-bottom: 4rem;
    border-bottom: 5px solid white;

    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: white;
    padding: 0.4rem;
    font-size: 25px;
    text-align: center;
    margin: 0 auto;

    &:hover {
        color: #61dafb;
        border-top: 2px solid #61dafb;
    }

    &.active {
        font-weight: 600;
        border-top: 2px solid #61dafb;
        color: #61dafb;

        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
    // 형제 요소들 간의 간격
        margin- left: 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(
                (c) => (
                    <Category
                        key={c.name}
                        className={({ isActive }) => (isActive ? 'active' : undefined)}
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                    >
                        {c.text}
                    </Category>
                )
            )}
        </CategoriesBlock>
    );
};

export default Categories;