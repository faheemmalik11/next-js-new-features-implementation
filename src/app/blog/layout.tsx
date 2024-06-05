import React, { FC, ReactNode } from "react";
interface Props {
    children?: ReactNode
    // any props that come into the component
}
const BlogLayout: FC<Props> = ({children}) => {
    return(<div><h2>This is blog layout</h2>{children}</div>)
}

export default BlogLayout;