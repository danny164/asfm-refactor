import { configureStore } from '@reduxjs/toolkit';
import roleReducer from 'features/Auth/roleSlice';

// import filterReducer from '../components/common/filterSlice';
// import totalReducer from '../components/common/totalSlice';
// import idPostReducer from '../components/pages/AsideRight/idPostSlice';
// import notificationReducer from '../views/web/Slice/notificationSlice';

// state to use with useSelector
const rootReducer = {
    // filter: filterReducer,
    // notification: notificationReducer,
    // total: totalReducer,
    // idPost: idPostReducer,
    role: roleReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
