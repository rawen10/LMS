import React from 'react';
import AdminNavbar from '../../component/NavBar/AdminNavbar';
import './AdminChangePassword.css';

const AdminChangePassword = () => {
  return (
    <div className="admin-change-password-container">
      <AdminNavbar />
      <div className="admin-change-password-content">
        <h1>تغيير كلمة المرور</h1>
        <form className="change-password-form">
          <div className="form-group">
            <label htmlFor="current-password">كلمة المرور الحالية</label>
            <input type="password" id="current-password" />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">كلمة المرور الجديدة</label>
            <input type="password" id="new-password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">تأكيد كلمة المرور الجديدة</label>
            <input type="password" id="confirm-password" />
          </div>
          <button type="submit" className="save-button">حفظ التغييرات</button>
        </form>
      </div>
    </div>
  );
};

export default AdminChangePassword;
