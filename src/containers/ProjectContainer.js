import {useCallback} from 'react';
import MainProject from '../components/MainProject'
import {useSelector, useDispatch} from 'react-redux';
import {change} from '../modules/projects';

const TodosContainer = (prop) => {
    const {focusimg, imgs} = useSelector (({ projects }) => ({ focusimg:projects.focusimg, imgs:projects.imgs}));
    const dispatch = useDispatch();
    const onChange = useCallback(img => dispatch( change(img)), [dispatch]);
    
    return (
        <div>
        <MainProject
        focusimg = {focusimg}
        imgs = {imgs}
        focus = {prop.focus}
        onChange = {onChange} />
        </div>
    );
};

export default TodosContainer;