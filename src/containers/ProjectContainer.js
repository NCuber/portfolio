import {useCallback} from 'react';
import MainProject from '../components/MainProject'
import {useSelector, useDispatch} from 'react-redux';
import {change, focus} from '../modules/projects';

const TodosContainer = () => {
    const {focusimg, imgs} = useSelector (({ projects }) => ({ focusimg:projects.focusimg, imgs:projects.imgs}));
    const dispatch = useDispatch();
    const onChange = useCallback(img => dispatch( change(img)), [dispatch]);
   // const onFocus = useCallback(id => dispatch( focus(id)), [dispatch]);
    return (
        <div>
        <MainProject
        focusimg = {focusimg}
        imgs = {imgs}
        onChange = {onChange} />
        </div>
    );
};

export default TodosContainer;