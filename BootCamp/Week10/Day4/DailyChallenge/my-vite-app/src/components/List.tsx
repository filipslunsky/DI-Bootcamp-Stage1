import { ReactNode } from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

const List = <T,>({items, renderItem}: ListProps<T>): ReactNode => {
    return (
        <>
            {
                items.map((item, indx) => {
                    return (
                        <p key={indx}>{renderItem(item)}</p>
                    )
                })
            }
        </>
    );
}
 
export default List;