'use client';

import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AppContextType = {
  handleSelectClub: (club: string) => void;
  refreshUser: () => void;
  user: any | null;
  loading: boolean;
  error: string | null;
  eng: any | null;
  spain: any | null;
  italy: any;
  france: any;
  germany: any;
  selectedClub: string;
  walletBalance: number;
  setWalletBalance: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedClub, setSelectedClub] = useState<string>('');
  const [eng, setEng] = useState();
  const [spain, setSpain] = useState();
  const [italy, setItaly] = useState();
  const [france, setFrance] = useState();
  const [germany, setGermany] = useState();
  let [walletBalance, setWalletBalance] = useState<number>(0);

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get('http://localhost:4000/nenjas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const england = response.data[0];
      const laLiga = response.data[1];
      const seriaA = response.data[2];
      const leagueOne = response.data[3];
      const bundesliga = response.data[4];
      setFrance(leagueOne);
      setSpain(laLiga);
      setEng(england);
      setItaly(seriaA);
      setGermany(bundesliga);
      console.log('Response from /users/me:', response.data);
      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSelectClub = (club: string) => {
    setSelectedClub(club);
    console.log('Selected club:', selectedClub);
  }

  const refreshUser = async () => {
    getUser();
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        error,
        eng,
        handleSelectClub,
        selectedClub,
        spain,
        italy,
        france,
        germany,
        walletBalance,
        setWalletBalance,
        refreshUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};