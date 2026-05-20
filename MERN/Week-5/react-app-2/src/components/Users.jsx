function Users(props){ //{props : {users : []}}
    const {userObj} = props; //destructuring
    //return react element
    return(
        <div className="text-center border-2 border-gray-400 p-5 rounded-lg shadow-xl shadow-gray-300">
            <h2>{userObj.name}</h2>
            <p>{userObj.email}</p>
            <img src={userObj.image} alt="" className="block mx-auto rounded-3xl mt-5" />
        </div>
    );
}

export default Users;