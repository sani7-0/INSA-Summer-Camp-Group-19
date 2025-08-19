import React, { useState } from 'react';

function ChangePasswordModal() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [criteriaMet, setCriteriaMet] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const validate = () => {
    const lengthOk = newPassword.length >= 8;
    const uppercaseOk = /[A-Z]/.test(newPassword);
    const numberOk = /\d/.test(newPassword);
    const specialOk = /[!.@#$%^&*()_+\-={}[\]|:;"'<>,.?/]/.test(newPassword);

    setCriteriaMet({
      length: lengthOk,
      uppercase: uppercaseOk,
      number: numberOk,
      special: specialOk,
    });
  };

  const isFormValid = Object.values(criteriaMet).every(Boolean) && newPassword && confirmPassword && newPassword === confirmPassword;

  const handleChangePassword = (e) => {
    e.preventDefault();
    validate();
    if (isFormValid) {
      alert('Password changed successfully!');
    }
  };

  return (
    // Partially overlayed modal with semi-transparent black background
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      
      {/* Modal Container */}
      <div className="relative bg-gray-100 rounded-xl p-8 max-w-md w-full shadow-lg z-10">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2 text-center">Change your password</h2>
        {/* Subtitle */}
        <p className="mb-4 text-center text-gray-700 text-sm">
          Enter a new password to secure your account.
        </p>
        {/* Form */}
        <form className="space-y-4" onSubmit={handleChangePassword}>
          {/* New Password */}
          <div>
            <label className="block mb-1 font-medium text-sm">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                validate();
              }}
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-sm">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* Validation Criteria */}
          <div className="mt-4 space-y-2 px-4">
            {/* Criterion 1: at least 8 characters */}
            <div className="flex items-center">
              <div
                className={`w-4 h-4 mr-2 rounded-full border-2 flex items-center justify-center ${
                  criteriaMet.length ? 'border-green-500' : 'border-red-500'
                }`}
              >
                {criteriaMet.length && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
              <p className={criteriaMet.length ? 'text-green-600' : 'text-red-600'}>
                at least 8 characters
              </p>
            </div>
            {/* Criterion 2: one uppercase */}
            <div className="flex items-center">
              <div
                className={`w-4 h-4 mr-2 rounded-full border-2 flex items-center justify-center ${
                  criteriaMet.uppercase ? 'border-green-500' : 'border-red-500'
                }`}
              >
                {criteriaMet.uppercase && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
              <p className={criteriaMet.uppercase ? 'text-green-600' : 'text-red-600'}>
                one uppercase letter
              </p>
            </div>
            {/* Criterion 3: one number */}
            <div className="flex items-center">
              <div
                className={`w-4 h-4 mr-2 rounded-full border-2 flex items-center justify-center ${
                  criteriaMet.number ? 'border-green-500' : 'border-red-500'
                }`}
              >
                {criteriaMet.number && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
              <p className={criteriaMet.number ? 'text-green-600' : 'text-red-600'}>
                one number
              </p>
            </div>
            {/* Criterion 4: one special character */}
            <div className="flex items-center">
              <div
                className={`w-4 h-4 mr-2 rounded-full border-2 flex items-center justify-center ${
                  criteriaMet.special ? 'border-green-500' : 'border-red-500'
                }`}
              >
                {criteriaMet.special && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
              <p className={criteriaMet.special ? 'text-green-600' : 'text-red-600'}>
                one special character (like !.@#$)
              </p>
            </div>
          </div>
          {/* Change Password Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full max-w-xs text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ${
                isFormValid
                  ? 'bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] hover:bg-blue-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordModal;