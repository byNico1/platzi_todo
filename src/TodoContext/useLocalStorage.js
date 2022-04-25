import { useEffect, useState } from 'react'


const useLocalStorage = (
    itemName, 
    initialValue ) => {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue);
  
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem; 
      
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
        
          setItem(parsedItem)
          setLoading(false)
        } catch(err) {
          setErr(err)
        }
  
      }, 1000)
    
    })
  
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem)
      } catch(err){
        setErr(err)
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      err
    }
  
}

export default useLocalStorage