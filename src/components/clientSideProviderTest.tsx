'use client'
import React, { FC, ReactNode } from "react";
interface Props {
    children?: ReactNode
    // any props that come into the component
}
const ClientSideProviderTest: FC<Props> = ({children}) => {
    return(<div>{children}</div>)
}

export default ClientSideProviderTest;