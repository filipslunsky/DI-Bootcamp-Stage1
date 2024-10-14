import { ReactElement } from 'react';
type HeadingProps = {
    title: string;
    subtitle?: string;
};

const Heading = ({ title, subtitle }: HeadingProps): ReactElement => {
    return (
        <>
            <h2>{title}</h2>
            <h2>{subtitle}</h2>
        </>
    )
};

export default Heading;