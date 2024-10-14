import { ReactNode } from "react";

interface UserProps {
    name?: string;
    age?: number;
};

const UserCard = ({name, age}: UserProps): ReactNode => {
    return (
        <>
        <h2>User Card</h2>
        {
            name ? <h4>Name: {name}</h4> : <h4>a user has no name</h4>
        }
        {
            age ? <h6>Age: {age}</h6> : <h6>a user has no age</h6>
        }
        
        </>
    );
}
 
export default UserCard;