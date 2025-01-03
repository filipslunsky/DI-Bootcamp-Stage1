// Part I
// 1. Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// 2. The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.
// 3. Use the cars inventory below:

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

const getCarHonda = carInventory => {
    return carInventory.find(car => car.car_make === 'Honda');
};
console.log(getCarHonda(inventory));

// Part II
// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars
// the function should return an inventory that is sorted by car_year, ascending.


const sortCarInventoryByYear = carInventory => {
    let result = carInventory.sort(function (x, y) {
        return x.car_year - y.car_year;
    });
    return result
};

// let result = inventory.sort(function (x, y) {
//     return x.car_year - y.car_year;
// });

console.log(sortCarInventoryByYear(inventory));
console.table(sortCarInventoryByYear(inventory)); // nicer view on the data