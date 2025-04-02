/*
The fetch() function is a built-in JavaScript API used to make HTTP requests.
It is asynchronous and returns a Promise, making it easier to retrieve and send data over the network.
*/
fetch(url, options)
    .then(response => response.json())//covert the data to json
    .then(data => console.log(data))//Handle the data
    .catch(error => console.error("Error:", error))//handling errors
/*
url → The API endpoint you want to fetch data from.

options (optional) → Configuration like method, headers, body, etc.
*/

//using fetch with async await
async function fetchPost() {
    try {
        const fetchData = await fetch(anyUrl)//The await keyword pauses execution until the response is received.
        //The response variable stores the HTTP response object.
        //At this point, response is NOT the actual data—it’s a response object containing metadata (status, headers, etc.).
        const data = await fetchData.json();

        //.json() is a built-in method that parses the response body into a JavaScript object.
        //await response.json() waits for this conversion to complete.
        //data now contains the actual JSON data from the API.
        console.log(data);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
fetchPost();
//summary of how it works
/*
 Sends an HTTP GET request to fetch post 1 from jsonplaceholder.typicode.com.
2️⃣ Waits for the response (await fetch(...)).
3️⃣ Converts the response to JSON (await response.json()).
4️⃣ Logs the fetched data to the console.
5️⃣ Handles errors using try...catch.
*/


