import { createContext, useState } from 'react'

export const CounterContext = createContext({
    count: 5,
    handleChange: () => {
        
    }
})

export const CounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(100)
    const handleChange = () => {
        setCount(count+1)
    }
    return <CounterContext.Provider value={
        {
            count,
            handleChange
        }
    }>
        {children}
    </CounterContext.Provider>
}

