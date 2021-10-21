import React, { useState, useContext, Children } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, openSubmenu, closeSidebar, closeSubmenu }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}