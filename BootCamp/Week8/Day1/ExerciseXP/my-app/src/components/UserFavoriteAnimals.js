const UserFavoriteAnimals = (props) => {
    return(
        <>
        <ul>
        {props.animals.map((item, index) => (
          <li key={index}>{item}</li>   
        ))}
      </ul>
        </>
    )
};

export default UserFavoriteAnimals;