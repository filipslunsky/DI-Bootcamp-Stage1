import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectStatus } from './selectors';
import { useCallback } from 'react';
import { fetchUsers } from './slice';

export const useUsersSelector = () => {
    return useSelector(selectUsers);
};

export const useUsersStatus = () => {
    return useSelector(selectStatus);
};

export const useFetchUsers = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
};
