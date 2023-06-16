// 'await' returns a Promise.
// generic is a type parameter. 
// getData will receive a type T, the type T will be returned inside of a Promise.
// generic is T. Prevalent throughout TypeScript. Writing parameterized types. 

export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    return await response.json();
};