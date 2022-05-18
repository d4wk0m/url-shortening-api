import React, { useContext } from 'react'

export const ShortcodeContext = React.createContext()

export function useShortcode() {
    return useContext(ShortcodeContext)
}

export function ShortcodeProvider({ children }) {
    const value = {
        getUrl,
    }

    async function getUrl(destination){
        console.log('kur')
        return await fetch('https://api.shrtco.de/v2/shorten?url='+destination, {method: 'POST'})
            .then(async response => {
                const data = await response.json()
                if (response.ok === false){
                    return "Wrong/Blocked Url"
                }
                return data.result.full_short_link
            })
            .catch(error => console.error(error));
    }

    return (
        <ShortcodeContext.Provider value={ value }>
            { children }
        </ShortcodeContext.Provider>
    )
}
