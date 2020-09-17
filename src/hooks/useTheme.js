import React, {useState, useEffect} from 'react'

import storage from 'local-storage-fallback'


const useTheme = (defaultTheme= {mode: 'light'}) => {
    const initialTheme = () => {
        const savedTheme = storage.getItem('theme')
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme
      }

    const [theme, _setTheme] = useState(initialTheme)

      useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
      }, [theme])

      return {
          ...theme,
          setTheme: ({setTheme, ...theme}) => _setTheme(theme)
      }
}

export default useTheme