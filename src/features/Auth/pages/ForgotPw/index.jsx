import { useAuth } from 'context/AuthContext';
import ForgotPwForm from 'features/Auth/components/ForgotPwForm';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';

function ForgotPw(props) {
    const [loading, setLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const { resetPassword } = useAuth();

    const onHandleSubmit = async (email) => {
        setLoading(true);
        try {
            await resetPassword(email);
            enqueueSnackbar('Yêu cầu lấy tại mật khẩu thành công, vui lòng kiểm tra email !', { variant: 'success' });
        } catch {
            enqueueSnackbar('Tài khoản không tồn tại !', { variant: 'error' });
        }
        setLoading(false);
    };

    return (
        <>
            <div className="login-forgot mw-40ch">
                <div className="mb-10">
                    <h3>Quên mật khẩu?</h3>
                    <div className="text-muted font-weight-bold">Nhập email để lấy lại mật khẩu</div>
                </div>
                <ForgotPwForm onHandleSubmit={onHandleSubmit} onLoading={loading} />
            </div>
        </>
    );
}

ForgotPw.propTypes = {};

export default ForgotPw;
