import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../reducers/userReducer';
import { RootState } from '../store/configureStore';
import { User } from '../types';

interface Props {
    size: 'small'|undefined,
}

const Avatar = ({ size } : Props) => {
    const user = useSelector<RootState, User>(state => state.user);
    const dispatch = useDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault()
                const name = prompt('Enter new name');
                dispatch(changeName(name));
            }}
            className={`user-avatar ${size}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;
