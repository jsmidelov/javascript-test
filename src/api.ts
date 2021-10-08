import {Video} from './model';

export class VideoApi{
    public static get = async(query:string):Promise<Video[]> => {
        return await fetch(`http://localhost:3000/videos?title=${query}`)
         .then(response => {
           if (!response.ok) throw new Error(response.statusText);
           return response.json<Video[]>()
         });
     }
     
    public static update = async (id:number, changes:Video): Promise<Video> => {
       return await fetch(`http://localhost:3000/videos/${id}`,{
         method: 'PUT',
         headers: {
           contentType: 'application/json'
         },
         body: {changes}
       }).then(response => {
         return response.json<Video>()
       });
     };
}