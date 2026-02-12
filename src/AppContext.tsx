import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppData {
    customerCount: string;
    countryCount: string;
    contactPhone: string;
    contactPerson: string;
    companyName: string;
    address: string;
}

interface AppContextType {
    data: AppData;
    updateData: (newData: Partial<AppData>) => void;
    isAdmin: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
    isPresenting: boolean;
    setIsPresenting: (val: boolean) => void;
}

const defaultData: AppData = {
    customerCount: "500+",
    countryCount: "10+",
    contactPhone: "9643498089",
    contactPerson: "Rohit Singh",
    companyName: "YantrAI Labs Pvt Ltd",
    address: "3rd Floor Tower A, SAS tower, Unit 309, near Medanta hospital, Medicity, Sector 38, Gurugram, Haryana 122001",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<AppData>(() => {
        const saved = localStorage.getItem('yantra_ai_data_v2');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Migration: Correct misspelled name if found in storage
            if (parsed.contactPerson === "Rohit Sing") {
                parsed.contactPerson = "Rohit Singh";
            }
            return { ...defaultData, ...parsed };
        }
        return defaultData;
    });

    const [isAdmin, setIsAdmin] = useState(false);
    const [isPresenting, setIsPresenting] = useState(false);

    useEffect(() => {
        localStorage.setItem('yantra_ai_data_v2', JSON.stringify(data));
    }, [data]);

    const updateData = (newData: Partial<AppData>) => {
        setData(prev => ({ ...prev, ...newData }));
    };

    const login = (u: string, p: string) => {
        if (u === 'admin' && p === 'admin') {
            setIsAdmin(true);
            return true;
        }
        return false;
    };

    const logout = () => setIsAdmin(false);

    return (
        <AppContext.Provider value={{
            data,
            updateData,
            isAdmin,
            login,
            logout,
            isPresenting,
            setIsPresenting
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useApp must be used within AppProvider');
    return context;
};
