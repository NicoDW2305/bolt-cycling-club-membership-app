import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { getMembers, deleteMember } from '../data/members';

    function MemberList() {
      const [members, setMembers] = useState([]);

      useEffect(() => {
        setMembers(getMembers());
      }, []);

      const handleDelete = (id) => {
        deleteMember(id);
        setMembers(getMembers());
      };

      return (
        <div>
          <h2>Members</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Membership Start Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.address}</td>
                  <td>{member.dateOfBirth}</td>
                  <td>{member.membershipStartDate}</td>
                  <td>
                    <Link to={`/edit/${member.id}`}><button className="edit-button">Edit</button></Link>
                    <button className="delete-button" onClick={() => handleDelete(member.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    export default MemberList;
