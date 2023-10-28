export const getItem = (key)=> localStorage.getItem(key);

export const getData = ( arr )=> arr.forEach( (key) => getItem(key) );

export const setItem = ( key, value )=> localStorage.setItem(key, value);

export const setData = ( obj )=> Object.entries( obj ).forEach( ([key, value]) => setItem(key, value) );
