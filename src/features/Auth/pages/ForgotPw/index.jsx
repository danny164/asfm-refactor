import ForgotPwForm from 'features/Auth/components/ForgotPwForm';
import React from 'react';

function ForgotPw(props) {
    return (
        <>
            <div className="login-forgot mw-40ch">
                <div className="mb-10">
                    <h3>Quên mật khẩu?</h3>
                    <div className="text-muted font-weight-bold">Nhập email để lấy lại mật khẩu</div>
                </div>
                Xử lý Submit Form Quên Mật khẩu
                <ForgotPwForm />
            </div>
        </>
    );
}

ForgotPw.propTypes = {};

export default ForgotPw;
