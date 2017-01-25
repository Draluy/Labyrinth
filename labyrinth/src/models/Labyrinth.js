 /**
 * Created by redeyed on 1/23/17.
 */

 import Room from "./Room"
 import config from "../Config"

 class Labyrinth {
     constructor(){
         this.rooms = [];
     }


     generateLabyrinth(){
         this.rooms = [];
         let start = new Room(0,0);
         start.isStart = true;
         this.rooms.push(start);

         let room = new Room(0,1);
         this.rooms.push(room);

         room = new Room(1,1);
         this.rooms.push(room);

         room = new Room(1,2);
         this.rooms.push(room);

         room = new Room(1,3);
         this.rooms.push(room);

         room = new Room(2,3);
         this.rooms.push(room);

         room = new Room(2,4);
         this.rooms.push(room);

         room = new Room(3,3);
         this.rooms.push(room);

         room = new Room(4,3);
         this.rooms.push(room);

         room = new Room(5,3);
         this.rooms.push(room);

         room = new Room(5,4);
         this.rooms.push(room);

         return this.rooms;
     }


 }



 /**
  * see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
  * @param min
  * @param max
  * @returns {*}
  */
 let getRandomIntInclusive = function(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min +1)) + min;
 }

 export default  Labyrinth;













