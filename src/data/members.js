let members = [
      {
        id: '1',
        name: 'John Doe',
        address: '123 Main St',
        dateOfBirth: '1990-01-01',
        membershipStartDate: '2023-01-01',
      },
      {
        id: '2',
        name: 'Jane Smith',
        address: '456 Oak Ave',
        dateOfBirth: '1995-05-05',
        membershipStartDate: '2023-02-15',
      },
    ];

    export const getMembers = () => {
      return members;
    };

    export const getMember = (id) => {
      return members.find((member) => member.id === id);
    };

    export const addMember = (member) => {
      members.push(member);
    };

    export const updateMember = (updatedMember) => {
      members = members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member,
      );
    };

    export const deleteMember = (id) => {
      members = members.filter((member) => member.id !== id);
    };
