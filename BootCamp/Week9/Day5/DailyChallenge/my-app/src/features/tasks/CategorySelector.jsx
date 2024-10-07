import { useSelector, useDispatch } from 'react-redux';
import { addCategory, editCategory, deleteCategory } from './state/slice';
import { useState, useRef } from 'react';
import { selectCategories } from './state/selectors';

const CategorySelector = () => {
    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategoryId, setEditingCategoryId] = useState(null);
    const [editingCategoryName, setEditingCategoryName] = useState('');
    const inputRef = useRef();
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    const handleAddCategory = () => {
        dispatch(addCategory(newCategoryName));
        setNewCategoryName('');
    };

    const handleDeleteCategory = (id) => {
        if (id) {
            dispatch(deleteCategory(id));
        }
    };

    const handleEditCategory = (id) => {
        if (id) {
            dispatch(editCategory({ id, name: editingCategoryName }));
            setEditingCategoryId(null);
            setEditingCategoryName('');
        } else {
            const categoryToEdit = categories.find(category => category.id === id);
            if (categoryToEdit) {
                setEditingCategoryName(categoryToEdit.name);
                setEditingCategoryId(id);
            }
        }
    };

    const handleNewCategoryChange = (e) => {
        setNewCategoryName(e.target.value);
    };

    const handleEditingCategoryChange = (e) => {
        setEditingCategoryName(e.target.value);
    };

    return (
        <>
            <h2>Categories</h2>
            <input 
                ref={inputRef} 
                type="text" 
                placeholder='New category...' 
                value={newCategoryName} 
                onChange={handleNewCategoryChange} 
            />
            <button onClick={handleAddCategory}>Add Category</button>
            <br />
            <h3>Existing Categories</h3>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {editingCategoryId === category.id ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editingCategoryName} 
                                    onChange={handleEditingCategoryChange} 
                                />
                                <button onClick={() => handleEditCategory(category.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{category.name}</span>
                                <button onClick={() => {
                                    setEditingCategoryId(category.id);
                                    setEditingCategoryName(category.name);
                                }}>Edit</button>
                            </>
                        )}
                        <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CategorySelector;
