import { ReactNode } from "react";

type GreetingProps = {
    name: string;
};

const Greeting = ({name}: GreetingProps): ReactNode => {
    return (
    <>
        <h2>Hello there, {name}!</h2>
    </>
    );
}
 
export default Greeting;