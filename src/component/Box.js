import React from 'react';
import { useSelector } from 'react-redux';
import UnderBox from './UnderBox';

const Box = () => {
    let count = useSelector(state => state.count);
    return (
        <div>
            Box에서 증가 {count}
            <UnderBox />
        </div>
    );
};

export default Box;
