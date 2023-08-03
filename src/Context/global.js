import { Action } from "@remix-run/router";
import { wait } from "@testing-library/user-event/dist/utils";
import React, {createContext, useContext, useReducer} from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const reducer = (state, Action) => {
    return state;
}

export const GlobalContextProvider = ({children}) => {
    //Initial state
    const initialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getPopularAnime = async () => {
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        console.log(data)
    };

    //initial render
    React.useEffect(() => {
        getPopularAnime();
    }, [])

    return(
        <GlobalContext.Provider value={{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
