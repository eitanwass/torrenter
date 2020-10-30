import {porn_category_index} from './Consts';

export const filterPorn = (result) => {
    return result.category[0] !== porn_category_index;
};

export const filterByReliability = (allowedReliability) => {
    return (result) => {
        return allowedReliability.includes(result.status);
    };
};