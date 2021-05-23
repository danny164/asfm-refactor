import RegisterForm from 'features/Auth/components/RegisterForm';
import React from 'react';

// Xử lý Đăng ký
function Register(props) {
    return (
        <>
            <div className="login_signup mw-40ch">
                <div className="mb-10">
                    <h3>Đăng ký</h3>
                    <div className="text-muted font-weight-bold">Nhập thông tin để tạo tài khoản</div>
                </div>
                <RegisterForm />
            </div>
        </>
    );
}

Register.propTypes = {};

export default Register;
