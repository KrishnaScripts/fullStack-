import { useState } from "react";
import { IUsers } from "../types/user.type";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([
        { id: 1, fullName: 'John Wick', department: 'Administration', email: 'wickboy@gmail.com', phone: '98010364656', leaveIssuer: 'Rohin Awale' },
        { id: 2, fullName: 'Rohin Awale', department: 'Administration', email: 'rohinawale331@gmail.com', phone: '98010304856', leaveIssuer: 'John Wick' },
        { id: 3, fullName: 'John Doe', department: 'Administration', email: 'johndoe@gmail.com', phone: '98010364656', leaveIssuer: 'Rohin Awale' },
        { id: 4, fullName: 'Jane Doe', department: 'Administration', email: 'janedoe@gmail.com', phone: '9803456123', leaveIssuer: 'Rohin Awale' },
        { id: 5, fullName: 'Ram Doe', department: 'Administration', email: 'ram@gmail.com', phone: '9803102030', leaveIssuer: 'Rohin Awale' }
      ]);
    
    return(
        <>
 <div className="profile-container">
      <div className="profile-content">
        <h2 className="profile-heading">Employee Details</h2>
        <div className="usercard-container">
          <div className="profile-card">
          <table className="user-table">
<thead>
  <tr>
    <th>Full Name</th>
    <th>Department</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Leave Issuer</th>
  </tr>
</thead>
<tbody>
  {users.map((user) => (
    <tr key={user.id}>
      <td>{user.fullName}</td>
      <td>{user.department}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.leaveIssuer}</td>
    </tr>
  ))}
</tbody>
</table>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Users;

