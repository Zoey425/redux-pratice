import React from 'react';
import { useSelector } from 'react-redux';

const UnderBox = () => {
    let count = useSelector(state => state.count);
    return <div>under Box : {count}</div>;
};

export default UnderBox;
