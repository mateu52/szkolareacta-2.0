
type Users = {
    id: number,
    nickname: string,
    age: number
}
type Props = {
    users: Users[],
    sort: "id"| "up" | "down"
}

const useSort = ( {users, sort }: Props) =>{
    const sortedUsers = [...users];
    if (sort ==="id"){
        sortedUsers.sort((a, b) => Number(a.id) - Number(b.id))
    }
    else if (sort ==="down"){
        sortedUsers.sort((a, b) => Number(b.age) - Number(a.age))
    }    
    else if (sort ==="up"){
        sortedUsers.sort((a, b) => Number(a.age) - Number(b.age))
    }
    return sortedUsers
}
export const ComponentSort = ({users, sort }: Props) => {
    console.log(users, sort);
    const sortedArray = useSort({ users, sort });
    return (
        <div>
            <ul>
                {sortedArray.map((user) => (
                    <li key={user.id}>
                        {user.nickname} = {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}