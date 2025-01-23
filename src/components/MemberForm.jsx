import React, { useState, useEffect } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';
    import { addMember, updateMember, getMember, getMembers } from '../data/members';
    import { v4 as uuidv4 } from 'uuid';

    function MemberForm() {
      const { id } = useParams();
      const navigate = useNavigate();
      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [dateOfBirth, setDateOfBirth] = useState('');
      const [membershipStartDate, setMembershipStartDate] = useState('');
      const [error, setError] = useState('');

      useEffect(() => {
        if (id) {
          const member = getMember(id);
          if (member) {
            setName(member.name);
            setAddress(member.address);
            setDateOfBirth(member.dateOfBirth);
            setMembershipStartDate(member.membershipStartDate);
          } else {
            setError('Member not found');
          }
        }
      }, [id]);

      const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !address || !dateOfBirth || !membershipStartDate) {
          setError('Please fill in all fields.');
          return;
        }

        const newMember = {
          id: id || uuidv4(),
          name,
          address,
          dateOfBirth,
          membershipStartDate,
        };

        if (id) {
          updateMember(newMember);
        } else {
          addMember(newMember);
        }

        navigate('/');
      };

      return (
        <div>
          <h2>{id ? 'Edit Member' : 'Add Member'}</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Date of Birth:</label>
              <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Membership Start Date:</label>
              <input type="date" value={membershipStartDate} onChange={(e) => setMembershipStartDate(e.target.value)} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={() => navigate('/')}>Cancel</button>
          </form>
        </div>
      );
    }

    export default MemberForm;
