//mon service
import axios from 'axios'

const api = axios.create({ 
    baseURL: "https://my-json-server.typicode.com/goncalve/plage",
    headers: {
        Accept: 'application/json'
    }
})

function getDestinations() {
    return api.get("/destinations") 
        .then((res) => {
            console.log(res.data);
            return res.data; //recupere data directement
        })
        .catch((err) => {
            console.error(err);
            throw err; 
        });
}
function getDestinationById(id) {
    return api.get("/destinations/"+id) 
    .then((res) => {
        console.log(res.data);
        return res.data; 
    })
    .catch((err) => {
        console.error(err);
        throw err; 
    });
}

export function useDestination(){
    return {getDestinations,getDestinationById}//pour recuperer les methodes 
}

