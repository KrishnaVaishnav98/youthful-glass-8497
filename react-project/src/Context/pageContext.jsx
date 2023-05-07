
import { createContext } from "react"
import { useState } from "react";

export const PageContext = createContext();

export default function PageContextProvider({ children }) {

    const [category, setCategory] = useState('Best Sellers');

    return (
        <div>
            <PageContext.Provider value={category}>
                {children}
            </PageContext.Provider>
        </div>
    )
}