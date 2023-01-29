import s from "./Users.module.css";
function Users({ users, followUser, unfollowUser, setUsers }) {
  if (users.length === 0) {
    setUsers(
      (users = [
        {
          id: 1,
          followed: false,
          fullName: "Dmitry",
          status: "I am a boss",
          location: { city: "Brest", country: "Belarus" },
          photoUrl: "https://i.mydramalist.com/QL1o6_5f.jpg",
        },
        {
          id: 2,
          followed: true,
          ffullName: "Micky",
          status: "I am a boss",
          location: { city: "Zabolottye", country: "Urkain" },
          photoUrl:
            "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
        },
        {
          id: 3,
          followed: true,
          fullName: "Kizya",
          status: "I am a boss",
          location: { city: "Kobrin", country: "Belarus" },
          photoUrl:
            "https://attachment.eab.com/wp-content/uploads/2019/08/Shreve-Mark-2019-06-26-24-484x484.jpg",
        },
        {
          id: 4,
          followed: false,
          fullName: "Pedro",
          status: "I am a boss",
          location: { city: "Brest", country: "Belarus" },
          photoUrl:
            "https://www.glee.co.uk/wp-content/uploads/2018/01/Mark-Simmons-WEB.jpg",
        },
        {
          id: 5,
          followed: true,
          fullName: "TheLastOne",
          status: "im lastest laster",
          location: { city: "Derevnya", country: "Belarus" },
          photoUrl:
            "https://cdn.mos.cms.futurecdn.net/8FCtVBUjbUszYpVAhnY72h.jpg",
        },
      ])
    );
  }

  return (
    <div className={s.wrapper}>
      {users.map((u) => {
        return (
          <div className={s.userCard}>
            <span>
              <div>
                <img className={s.img} src={u.photoUrl} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      unfollowUser(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      followUser(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
