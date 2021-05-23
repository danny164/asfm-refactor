import { db } from 'app/firebase';
import { useAuth } from 'context/AuthContext';
import LoginForm from 'features/Auth/components/LoginForm';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Xử lý Login
function Login(props) {
    const { currentUser } = useAuth();
    const { signin } = useAuth();

    const [loading, setLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const history = useHistory();

    // async function updateRole() {
    //     await db.collection('ShopProfile').doc(currentUser.uid).update({
    //         role: '1',
    //         lock_time: '',
    //         reason: '',
    //     });
    // }

    // if (currentUser) {
    //     async function checkRole() {
    //         try {
    //             await db
    //                 .collection('ShopProfile')
    //                 .doc(currentUser.uid)
    //                 .get()
    //                 .then((doc) => {
    //                     if (doc.exists) {
    //                         if (doc.data().lock_time < moment().format('X') && doc.data().role !== '1' && doc.data().role !== '9') {
    //                             updateRole();
    //                         }
    //                     }
    //                 });
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }

    //     async function fetchRole() {
    //         try {
    //             await db
    //                 .collection('ShopProfile')
    //                 .doc(currentUser.uid)
    //                 .get()
    //                 .then((doc) => {
    //                     if (doc.exists) {
    //                         if (doc.data().role === '1' || doc.data().role === '2') {
    //                             localStorage.setItem('fullname', doc.data().fullname);
    //                             localStorage.setItem('email', currentUser.email);
    //                             localStorage.setItem('role', doc.data().role);
    //                             history.push('/home');
    //                         }

    //                         if (doc.data().role === '9') {
    //                             localStorage.setItem('fullname', doc.data().fullname);
    //                             localStorage.setItem('email', currentUser.email);
    //                             localStorage.setItem('role', doc.data().role);
    //                             history.push('/admin');
    //                         }

    //                         if (doc.data().role === '0') {
    //                             localStorage.setItem('role', doc.data().role);
    //                             history.push('/banned');
    //                         }
    //                     } else {
    //                         console.log('No such document!');
    //                     }
    //                 });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     checkRole();
    //     fetchRole();
    // }

    const onHandleSubmit = async (email, password) => {
        setLoading(true);
        try {
            await signin(email, password);
            enqueueSnackbar('Đăng nhập thành công !', { variant: 'success' });
            setLoading(false);
        } catch {
            enqueueSnackbar('Đăng nhập thất bại !', { variant: 'error' });
        }
        setLoading(false);
    };

    return (
        <>
            <div className="login-signin mw-40ch">
                <div className="mb-10">
                    <h3>Đăng nhập</h3>
                    <div className="text-muted font-weight-bold">Amateur Shipper for Merchants</div>
                </div>
                <LoginForm onHandleSubmit={onHandleSubmit} onLoading={loading} />
                <div className="mt-10">
                    <span className="opacity-70 mr-4">Bạn chưa có tài khoản?</span>
                    <Link to="register" className="text-muted text-hover-primary font-weight-bold">
                        Đăng ký!
                    </Link>
                </div>
            </div>
        </>
    );
}

Login.propTypes = {};

export default Login;
