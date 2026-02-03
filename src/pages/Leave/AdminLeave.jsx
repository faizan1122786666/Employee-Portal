// import React from 'react'
// import { useEffect } from 'react';

// function AdminLeave({setTitle}) {
//   useEffect ( () => {
//   setTitle('Leave Page');
//   },[setTitle])

//   return (
//     <div>
//       Admin Leave
//     </div>
//   )
// }

// export default AdminLeave





import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getAllLeaves } from '../../data/mockLeaveData';
// import './Leave.css';

const AdminLeave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeave, setSelectedLeave] = useState(null);

  const statusOptions = [
    { value: 'Approved', label: 'Approve', color: '#10B981' },
    { value: 'Rejected', label: 'Reject', color: '#EF4444' },
    { value: 'Pending', label: 'Pending', color: '#F59E0B' }
  ];

  useEffect(() => {
    const leaves = getAllLeaves();
    setLeaveRequests(leaves);
    setFilteredRequests(leaves);
  }, []);

  useEffect(() => {
    filterRequests();
  }, [statusFilter, searchTerm, leaveRequests, filterRequests]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterRequests = () => {
    let filtered = [...leaveRequests];

    // Filter by status
    if (statusFilter !== 'All') {
      filtered = filtered.filter(req => req.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(req =>
        req.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        req.leaveType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRequests(filtered);
  };

  const handleStatusChange = (selectedOption, leaveId) => {
    const updatedRequests = leaveRequests.map(req =>
      req.id === leaveId ? { ...req, status: selectedOption.value } : req
    );
    setLeaveRequests(updatedRequests);
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
      borderColor: state.isFocused ? '#3B82F6' : '#E5E7EB',
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

  const viewDetails = (leave) => {
    setSelectedLeave(leave);
  };

  const closeModal = () => {
    setSelectedLeave(null);
  };

  return (
    <div className="admin-leave-container">
      <div className="leave-header">
        <h1 className="leave-title">Leave Management</h1>
        <p className="leave-subtitle">Review and manage employee leave requests</p>
      </div>

      <div className="leave-controls">
        <div className="search-bar">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, email, or leave type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-tabs">
          {['All', 'Pending', 'Approved', 'Rejected'].map(status => (
            <button
              key={status}
              className={`filter-tab ${statusFilter === status ? 'active' : ''}`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
              <span className="count-badge">
                {status === 'All'
                  ? leaveRequests.length
                  : leaveRequests.filter(r => r.status === status).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="leave-table-container">
        <table className="leave-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>Duration</th>
              <th>Days</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  No leave requests found
                </td>
              </tr>
            ) : (
              filteredRequests.map((leave) => (
                <tr key={leave.id} className="leave-row">
                  <td>
                    <div className="employee-info">
                      <div className="employee-avatar">
                        {leave.employeeName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="employee-name">{leave.employeeName}</div>
                        <div className="employee-email">{leave.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="leave-type-badge">{leave.leaveType}</span>
                  </td>
                  <td>
                    <div className="date-range">
                      <div>{new Date(leave.startDate).toLocaleDateString('en-GB')}</div>
                      <div className="date-separator">to</div>
                      <div>{new Date(leave.endDate).toLocaleDateString('en-GB')}</div>
                    </div>
                  </td>
                  <td>
                    <span className="days-badge">{leave.days} {leave.days === 1 ? 'day' : 'days'}</span>
                  </td>
                  <td>{new Date(leave.appliedDate).toLocaleDateString('en-GB')}</td>
                  <td>
                    <span className={getStatusBadgeClass(leave.status)}>
                      {leave.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-select">
                      <Select
                        options={statusOptions}
                        value={statusOptions.find(opt => opt.value === leave.status)}
                        onChange={(option) => handleStatusChange(option, leave.id)}
                        styles={customSelectStyles}
                        className="status-select"
                        isSearchable={false}
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      className="view-details-btn"
                      onClick={() => viewDetails(leave)}
                    >
                      <svg className="eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {selectedLeave && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Leave Request Details</h2>
              <button className="close-btn" onClick={closeModal}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">Employee Name:</span>
                <span className="detail-value">{selectedLeave.employeeName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{selectedLeave.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Leave Type:</span>
                <span className="detail-value">{selectedLeave.leaveType}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Start Date:</span>
                <span className="detail-value">{new Date(selectedLeave.startDate).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">End Date:</span>
                <span className="detail-value">{new Date(selectedLeave.endDate).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Number of Days:</span>
                <span className="detail-value">{selectedLeave.days} {selectedLeave.days === 1 ? 'day' : 'days'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Applied Date:</span>
                <span className="detail-value">{new Date(selectedLeave.appliedDate).toLocaleDateString('en-GB')}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status:</span>
                <span className={getStatusBadgeClass(selectedLeave.status)}>{selectedLeave.status}</span>
              </div>
              <div className="detail-row-full">
                <span className="detail-label">Reason:</span>
                <div className="reason-box">{selectedLeave.reason}</div>
              </div>
              {selectedLeave.adminComment && (
                <div className="detail-row-full">
                  <span className="detail-label">Admin Comment:</span>
                  <div className="comment-box">{selectedLeave.adminComment}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLeave;