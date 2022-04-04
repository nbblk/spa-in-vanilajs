export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData.Data[0].Result;        
    } catch (error) {
        console.error(error);
    }    
}
