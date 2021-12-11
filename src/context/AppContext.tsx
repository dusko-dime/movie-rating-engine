import {useState, createContext, useContext, ReactNode, FC, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

type Props = {
    children: ReactNode;
}

type AppContextProps = {
    isLoading: boolean,
    error: ErrorProps | null,
    setAppLoading: (loading: boolean) => void,
    setError: (error: ErrorProps | null) => void
}

interface ErrorProps {
    text: string,
    code?: number
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppConsumer = AppContext.Consumer;

const AppProvider: FC<Props> = ({children}) => {

    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<ErrorProps | null>(null);
    const history = useHistory();

    const setAppLoading = (loading: boolean) => {
        setLoading(loading);
    }

    useEffect(() => {
        if(error) {
            history.push('/error');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const state: AppContextProps = {
        isLoading,
        error,
        setError,
        setAppLoading
    };

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppStateValue = () =>
    useContext(AppContext);

export default AppProvider;
