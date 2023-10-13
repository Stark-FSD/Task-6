console.log("File Linked")



//1st Answer:


//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md 

//a) Here is an example of a constructor for the class Movie that takes the title, studio, and rating as arguments and sets the respective class properties:

// class Movie {
//     constructor(title, studio, rating) {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }


// const movie1 = new Movie("Avengers", "Marvel Studio Productions", "PG-13");
// const movie2 = new Movie("Shutter Island", "Columbia Pictures", "R");

// console.log(movie1.title); 
// console.log(movie1.studio); 
// console.log(movie1.rating); 

// console.log(movie2.title); 
// console.log(movie2.studio); 
// console.log(movie2.rating); 

// // //b) To set the class property rating to "PG" as default when no rating is provided, you can modify the constructor as follows:

// class Movie {
//     constructor(title, studio, rating = "PG") {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }


// const movie3 = new Movie("Avengers", "Marvel Studios Productions");
// console.log(movie3.title); 
// console.log(movie3.studio);
// console.log(movie3.rating); 

// const movie4 = new Movie("Shutter Island", "Columbia Pictures", "R");
// console.log(movie4.title); 
// console.log(movie4.studio);
// console.log(movie4.rating); 


// // //c) Here is an example of a method getPG that takes an array of base type Movie as its argument and returns a new array of only those movies in the input array with a rating of "PG":

// class Movie {
//     constructor(title, studio, rating = "PG") {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }

//     static getPG(movies) {
//         return movies.filter(movie => movie.rating === "PG");
//     }
// }


// const movies = [
//     new Movie("Avengers", "Marvel Studios Productions", "PG-13"),
//     new Movie("The Incredibles", "Pixar Animation Studios", "PG"),
//     new Movie("Jurassic Park", "Universal Pictures", "PG-13"),
//     new Movie("Finding Nemo", "Pixar Animation Studios", "G")
// ];

// const pgMovies = Movie.getPG(movies);

// console.log("PG Movies:");
// pgMovies.forEach(movie => {
//     console.log(movie.title, "(", movie.studio, ")", " - Rating:", movie.rating);
// });



// // //d) To create an instance of the class Movie with the title "Casino Royale", the studio "Eon Productions", and the rating "PG­13", you can use the following code:

// const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// console.log("Movie Title: " + casinoRoyale.title);
// console.log("Studio: " + casinoRoyale.studio);
// console.log("Rating: " + casinoRoyale.rating);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2nd Answer:

// class Circle {
//     private radius: number;
//     private color: string;
  
//     constructor(radius: number = 1.0, color: string = "red") {
//       this.radius = radius;
//       this.color = color;
//     }
  
//     public getRadius(): number {
//       return this.radius;
//     }
  
//     public setRadius(radius: number): void {
//       this.radius = radius;
//     }
  
//     public getColor(): string {
//       return this.color;
//     }
  
//     public setColor(color: string): void {
//       this.color = color;
//     }
  
//     public toString(): string {
//       return `Circle: radius=${this.radius}, color=${this.color}`;
//     }
  
//     public getArea(): number {
//       return Math.PI * Math.pow(this.radius, 2);
//     }
  
//     public getCircumference(): number {
//       return 2 * Math.PI * this.radius;
//     }
//   }
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3rd Answer:

// class Person {
//     constructor(name, age, address, phoneNumber) {
//       this.name = name;
//       this.age = age;
//       this.address = address;
//       this.phoneNumber = phoneNumber;
//     }
  
  
//     getName() {
//       return this.name;
//     }
  
//     setName(name) {
//       this.name = name;
//     }
  
//     getAge() {
//       return this.age;
//     }
  
//     setAge(age) {
//       this.age = age;
//     }
  
//     getAddress() {
//       return this.address;
//     }
  
//     setAddress(address) {
//       this.address = address;
//     }
  
//     getPhoneNumber() {
//       return this.phoneNumber;
//     }
  
//     setPhoneNumber(phoneNumber) {
//       this.phoneNumber = phoneNumber;
//     }
//   }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //4th Answer:

 class UberPriceCalculator {
    constructor(baseFare, ratePerKm, ratePerMinute, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.ratePerKm = ratePerKm;
        this.ratePerMinute = ratePerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distanceInKms, timeInMinutes) {
        const fare = (this.baseFare + (distanceInKms * this.ratePerKm) + (timeInMinutes * this.ratePerMinute)) * this.surgeMultiplier;
        return parseFloat(fare.toFixed(2)); 
    }
}

// Example:
const calculator = new UberPriceCalculator(2.5, 1.75, 0.3, 1.2); 
const distanceInKms = 16; 
const timeInMinutes = 20; 
const estimatedPrice = calculator.calculatePrice(distanceInKms, timeInMinutes);

console.log(`Estimated Uber Price: $${estimatedPrice}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////