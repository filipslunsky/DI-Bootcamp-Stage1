import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectStatus, selectAuthor } from './selectors';
import { useCallback } from 'react';
import { fetchUsers, selectedAuthor } from './slice';

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

export const useSelectedAuthor = () => {
    return useSelector(selectAuthor);
};

export const useSelectAuthor = () => {
    const dispatch = useDispatch();
    return useCallback((id) => {
        dispatch(selectedAuthor(id));
    }, [dispatch]);
};