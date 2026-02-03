// import React from 'react'

// function UserLeave() {
//   return (
//     <div>
//       User Leave
//     </div>
//   )
// }

// export default UserLeave




import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getEmployeeLeaves, leaveTypes } from '../../data/mockLeaveData';
// import './Leave.css';

const UserLeave = () => {
  const [userLeaves, setUserLeaves] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  });
  const [errors, setErrors] = useState({});

  // Assuming logged-in user ID is 1 (Ali Hamza)
  const currentUserId = 1;

  useEffect(() => {
    const leaves = getEmployeeLeaves(currentUserId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserLeaves(leaves);
  }, []);

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleLeaveTypeChange = (selectedOption) => {
    setFormData(prev => ({
      ...prev,
      leaveType: selectedOption ? selectedOption.value : ''
    }));
    if (errors.leaveType) {
      setErrors(prev => ({ ...prev, leaveType: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.leaveType) {
      newErrors.leaveType = 'Please select a leave type';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    }
    if (formData.startDate && formData.endDate) {
      if (new Date(formData.endDate) < new Date(formData.startDate)) {
        newErrors.endDate = 'End date must be after start date';
      }
    }
    if (!formData.reason || formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide a reason (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const days = calculateDays(formData.startDate, formData.endDate);
      const newLeave = {
        id: userLeaves.length + 1,
        employeeId: currentUserId,
        employeeName: 'Ali Hamza',
        email: 'alihamza@gmail.com',
        leaveType: formData.leaveType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        days: days,
        reason: formData.reason,
        status: 'Pending',
        appliedDate: new Date().toISOString().split('T')[0],
        adminComment: ''
      };

      setUserLeaves(prev => [newLeave, ...prev]);
      setFormData({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: ''
      });
      setShowForm(false);
      alert('Leave request submitted successfully!');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Approved':
        return 'status-badge status-approved';
      case 'Rejected':
        return 'status-badge status-rejected';
      case 'Pending':
        return 'status-badge status-pending';
      default:
        return 'status-badge';
    }
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: errors.leaveType ? '#EF4444' : state.isFocused ? '#3B82F6' : '#E5E7EB',
      boxShadow: state.isFocused ? '0 0 0 1px #3B82F6' : 'none',
      '&:hover': {
        borderColor: '#3B82F6'
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#3B82F6'
        : state.isFocused
        ? '#EFF6FF'
        : 'white',
      color: state.isSelected ? 'white' : '#1F2937',
      cursor: 'pointer'
    })
  };

  return (
    <div className="user-leave-container">
      <div className="leave-header">
        <div>
          <h1 className="leave-title">My Leave Requests</h1>
          <p className="leave-subtitle">View and manage your leave applications</p>
        </div>
        <button
          className="apply-leave-btn"
          onClick={() => setShowForm(!showForm)}
        >
          <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Apply for Leave
        </button>
      </div>

      {/* Leave Application Form */}
      {showForm && (
        <div className="leave-form-card">
          <div className="form-header">
            <h2 className="form-title">New Leave Request</h2>
            <button className="close-form-btn" onClick={() => setShowForm(false)}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="leave-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Leave Type <span className="required">*</span>
                </label>
                <Select
                  options={leaveTypes}
                  value={leaveTypes.find(type => type.value === formData.leaveType)}
                  onChange={handleLeaveTypeChange}
                  styles={customSelectStyles}
                  placeholder="Select leave type"
                  isClearable
                />
                {errors.leaveType && <span className="error-message">{errors.leaveType}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Start Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className={`form-input ${errors.startDate ? 'input-error' : ''}`}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.startDate && <span className="error-message">{errors.startDate}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  End Date <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className={`form-input ${errors.endDate ? 'input-error' : ''}`}
                  min={formData.startDate || new Date().toISOString().split('T')[0]}
                />
                {errors.endDate && <span className="error-message">{errors.endDate}</span>}
              </div>
            </div>

            {formData.startDate && formData.endDate && (
              <div className="days-info">
                <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Total Days: {calculateDays(formData.startDate, formData.endDate)}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">
                Reason for Leave <span className="required">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className={`form-textarea ${errors.reason ? 'input-error' : ''}`}
                rows="4"
                placeholder="Please provide a detailed reason for your leave request..."
              />
              {errors.reason && <span className="error-message">{errors.reason}</span>}
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  setShowForm(false);
                  setFormData({ leaveType: '', startDate: '', endDate: '', reason: '' });
                  setErrors({});
                }}
              >
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Leave History */}
      <div className="leave-history">
        <h2 className="history-title">Leave History</h2>
        {userLeaves.length === 0 ? (
          <div className="no-leaves">
            <svg className="no-data-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No leave requests yet</p>
            <button className="apply-first-leave-btn" onClick={() => setShowForm(true)}>
              Apply for your first leave
            </button>
          </div>
        ) : (
          <div className="leave-cards">
            {userLeaves.map((leave) => (
              <div key={leave.id} className="leave-card">
                <div className="card-header">
                  <span className="leave-type-badge">{leave.leaveType}</span>
                  <span className={getStatusBadgeClass(leave.status)}>{leave.status}</span>
                </div>
                <div className="card-body">
                  <div className="card-detail">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="detail-label">Duration</div>
                      <div className="detail-text">
                        {new Date(leave.startDate).toLocaleDateString('en-GB')} - {new Date(leave.endDate).toLocaleDateString('en-GB')}
                      </div>
                    </div>
                  </div>
                  <div className="card-detail">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="detail-label">Days</div>
                      <div className="detail-text">{leave.days} {leave.days === 1 ? 'day' : 'days'}</div>
                    </div>
                  </div>
                  <div className="card-detail">
                    <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <div className="detail-label">Reason</div>
                      <div className="detail-text reason-text">{leave.reason}</div>
                    </div>
                  </div>
                  {leave.adminComment && (
                    <div className="card-detail admin-comment">
                      <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <div>
                        <div className="detail-label">Admin Comment</div>
                        <div className="detail-text">{leave.adminComment}</div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-footer">
                  <span className="applied-date">
                    Applied on {new Date(leave.appliedDate).toLocaleDateString('en-GB')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLeave;
