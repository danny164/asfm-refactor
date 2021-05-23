import { db } from 'app/firebase';
import { convertString } from 'components/Convert/String';
import { useAuth } from 'context/AuthContext';
import RegisterForm from 'features/Auth/components/RegisterForm';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import random from 'randomstring';

// Xử lý Đăng ký
function Register(props) {
    const { currentUser } = useAuth();
    const { signup } = useAuth();

    const [loading, setLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();

    const [fullname, setFullname] = useState();
    const [phone, setPhone] = useState();

    if (currentUser) {
        const insertShopInfor = async () => {
            try {
                await db
                    .collection('ShopProfile')
                    .doc(currentUser.uid)
                    .set({
                        fullname: convertString(fullname),
                        phone: phone,
                        email: currentUser.email,
                        id:
                            moment().format('YYYYMMDD-HHmmssSSS') +
                            random.generate({
                                length: 3,
                                charset: 'numeric',
                            }),
                        uid: currentUser.uid,
                        role: '1',
                        address: '',
                        district: '',
                        ward: '',
                        detailAddress: '',
                        lastEdited: '',
                        reason: '',
                        lock_time: '',
                    });
            } catch {
                console.log('error');
            }
        };
        insertShopInfor();

        async function fetchRole() {
            try {
                await db
                    .collection('ShopProfile')
                    .doc(currentUser.uid)
                    .get()
                    .then((doc) => {
                        if (doc.exists) {
                            localStorage.setItem('fullname', doc.data().fullname);
                            localStorage.setItem('email', currentUser.email);
                            localStorage.setItem('role', doc.data().role);
                            // history.push('/home');
                        } else {
                            console.log('No such document!');
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchRole();
    }

    const onHandleSubmit = async (email, password, fullname, phone) => {
        setLoading(true);
        setFullname(fullname);
        setPhone(phone);

        try {
            await signup(email, password);
            enqueueSnackbar('Đăng kí thành công !', { variant: 'success' });
            setLoading(false);
        } catch (err) {
            // ! https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#createuserwithemailandpassword
            const errorCode = err.code;
            if (errorCode === 'auth/email-already-in-use') {
                enqueueSnackbar('Tài khoản đã tồn tại !', { variant: 'error' });
            } else {
                enqueueSnackbar('Đăng kí thất bại !', { variant: 'error' });
            }
        }
        setLoading(false);
    };

    return (
        <>
            <div className="login_signup mw-40ch">
                <div className="mb-10">
                    <h3>Đăng ký</h3>
                    <div className="text-muted font-weight-bold">Nhập thông tin để tạo tài khoản</div>
                </div>
                <RegisterForm onHandleSubmit={onHandleSubmit} onLoading={loading} />
            </div>
        </>
    );
}

Register.propTypes = {};

export default Register;
