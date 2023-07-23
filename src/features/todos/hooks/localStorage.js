// CUSTOM HOOK PARA GUARDAR/ELIMINAR TODOS EN LOCAL STORAGE
import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  // CUSTOM HOOK

  // TRAER DE LOCALSTORAGE EL ARRAY DE TODO'S
  // SI NO EXISTE TODOS_V1 SE CREA [] SI NO SE OBTIENE
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  // PERSISTIR LOS TODOS COMPLETADO/ELIMINADO EN LOCALSTORAGE
  const saveItem = (newItem) => {
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
