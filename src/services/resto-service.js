export default class RestoService {
    
    
    async getMenuItems(){
        await fetch('http://localhost:3002/menu')
            .then(data => data.json())
            .then(data => console.log(data));
    }


}