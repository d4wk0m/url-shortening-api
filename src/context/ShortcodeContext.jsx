import React, { useContext, useEffect, useState } from 'react'

export const ShortcodeContext = React.createContext()

export function useShortcode() {
    return useContext(ShortcodeContext)
}

export function ShortcodeProvider({ children }) {
    const value = {
        getUrl,
    }

    async function getUrl(destination){
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                apikey: '7bf85717a892456f993444c6d414b094'
            },
            body: JSON.stringify({destination: destination})
            };
        
        return await fetch('https://api.rebrandly.com/v1/links', options)
            .then(response => response.json())
            .then(response => response.shortUrl)
            .catch(err => console.error(err));
    }

    return (
        <ShortcodeContext.Provider value={ value }>
            { children }
        </ShortcodeContext.Provider>
    )
}
