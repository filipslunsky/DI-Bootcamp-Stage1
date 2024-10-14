import { ReactElement, ReactNode } from "react";

type SectionProps = {
    children: ReactNode;
    content: string | number;
};

const Section = ({ children, content }: SectionProps): ReactElement => {
    return (
        <>
            <h2>{children}</h2>
            <p>{content}</p>
        </>
    );
}
 
export default Section;