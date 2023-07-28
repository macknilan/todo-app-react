// CUSTOM HOOK PARA GUARDAR/ELIMINAR TODOs EN LOCAL STORAGE
import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        // TRAER DE LOCAL STORAGE EL ARRAY DE TODO's
        // SI NO EXISTE TODOS_V1 SE CREA [] SI NO SE OBTIENE
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1500);
  });
  // PERSISTIR LOS TODOs COMPLETADO/ELIMINADO EN LOCAL STORAGE
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
