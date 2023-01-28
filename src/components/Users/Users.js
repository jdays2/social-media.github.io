import s from "./Users.module.css";
function Users(users) {
  console.lot(users);
  return (
    <div>
      {users.map((u) => (
        <div>{u.name}</div>
      ))}
    </div>
  );
}

export default Users;
