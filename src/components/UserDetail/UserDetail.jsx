import { useLoaderData } from "react-router-dom";


const UserDetail = () => {
    // const user = useLoaderData();
    const Users = useLoaderData();
    const { id, name, website } = Users;
    // console.log(users);npm run 
    return (
        <div>
            <h1>User About Detail :{name}</h1>
            <p>website:{website}</p>
            <h2>id: {id}</h2>
        </div>
    );
};

export default UserDetail;