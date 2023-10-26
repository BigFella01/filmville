export const getJSON = async function (url, options) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error('Something went wrong.')
        const data = await res.json();
        return data;
    } 
    
    catch (err) {
        console.error(err)
    }
}

export const wait = function (seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000)
    })
};