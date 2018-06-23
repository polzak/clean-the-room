const cleanTheRoom = (arr) => {

    //a compare function to be used as an argument for array.sort() method
    const compare = (a, b) => {
        return a-b;
    }

    //the core function for the cleanTheRoom function.
    //it takes a sorted array, and cleans it.
    const cleanAfterSort = (sortedArr) => {

        //if sortedArr has no more than one element, we do not need cleaning
        if (sortedArr.length < 2) {
            return sortedArr;
        } 
        
        const cleanedArr = []; //this will be returned as a result of cleaning
        let sameNumberArr = []; //we use it to store same numbers temporarily to push them as an array into the cleanedArr

        sortedArr.forEach((el, i, arr) => {

            //the first element should just be pushed into the sameNumberArr
            if (i === 0) { 
                sameNumberArr.push(el); 
            }
            
            let num; //we are going to assign every element to this variable to know if it is same with the previous one
            
            if (i < arr.length - 1) { //we start from the second element, 
                num = arr[i+1];      //whereas the first one is just put in the sameNumberArr waiting to be compared
            } else {                //if we are reaching a value beyond the array's length at the last turn of iteration, 
                num = undefined;   //we just assign it undefined; 
            }                     //but we need to run the last turn to handle the last element remaining in the sameNumberArr

            if (sameNumberArr.length < 1 || num === sameNumberArr[0]) { //if the sameNumberArr is empty or the number is same with the previous one
                sameNumberArr.push(num);                                //we push the current number into it
            } else {                                //but if the current number is not same with the previous one
                if (sameNumberArr.length > 1) {     //if the previous numbers are more than one, 
                    cleanedArr.push(sameNumberArr); //we push them as an array into the result array, i.e. cleanedArr
                } else {                            //or if the previous number is lonely one,
                    cleanedArr.push(sameNumberArr[0]); //we push it as a number into the result array, i.e. cleanedArr
                }

                sameNumberArr = [];         //we make sameNumberArr empty so that it gets a new number
                if (num !== undefined) {    
                    sameNumberArr.push(num); //we push a new number into the sameNumberArr, 
                }                            //and it is waiting there to be compared with the next number
            }                               
        });

        return cleanedArr;
    }

    //first, we separate numbers and strings mixed in a given array.
    //we create numberArr to include only numbers, and stringArr to include only strings.
    const numberArr = arr.filter((el) => typeof(el) === 'number' && !isNaN(el)); //as the type of NaN is Number, we should filter them here
    const stringArr = arr.filter((el) => typeof(el) === 'string');

    //sort the numbers' array
    if (numberArr.length > 1) {
        numberArr.sort(compare);
    }
    //then clean it
    const cleanedNumberArr = cleanAfterSort(numberArr);

    let cleanedStringArr;

    if (stringArr.length < 2){ //if stringArr has no more than one element, we do not need to sort or clean it
        cleanedStringArr = stringArr;
    } else {
        //convert the strings into numbers before sort them
        //if we sorted strings directly, the sort order would be in the unicode style, 
        //where '10' comes before '2'; thus convering is indispensable
        const offStringArr = (stringArr.map(str => Number(str))).filter(el => !isNaN(el)); //filter is used to remove NaN after conversion
        offStringArr.sort(compare);
        
        //when cleaning, the strings' array is still in type of numbers 
        const cleanedOffStringArr = cleanAfterSort(offStringArr);

        //convert the cleaned strings into numbers
        //if an element is an array of numbers, we map it to convert each element within it, while keeping the array that is wrapping them
        cleanedStringArr = cleanedOffStringArr.map(num => {
            if (typeof(num) === 'number') {
                return String(num);
            } else {
                return num.map(el => String(el));
            }
        });
    }

    //now we have both cleaned numbers' array and cleaned strings' one
    return [cleanedNumberArr, cleanedStringArr];
};

//a test function 
const exampleTest = () => {
    const exampleArr = [3, 2, 17, "3", 2, 1, "7", 14, "7", 17, 17, 43, 2, 5, "4", "5", "4", "7", "15"];
    //const exampleArr2 = ['1', 1, 3, '3', 5, 'cc', '5', 3, '5', 3, '1', 1, 'aa', 'bb', NaN, undefined, null];
        
    const exampleResult = cleanTheRoom(exampleArr);
    console.log(`The numbers' result after cleaning:`, exampleResult[0]);
    console.log(`The strings' result after cleaning:`, exampleResult[1]);

}

//a test function for a random array
const randomTest = () => {
    const generateRandomArray = () => {
        const arr = [];
        let el;
    
        for (let i=0; i<20; i++) {
            el = Math.floor(Math.random()*10);
            if (Math.random() > 0.5) { el = String(el); }
            arr.push(el);
        }
        return arr;
    }
    
    const randomArr = generateRandomArray();
    console.log('A randomly given array:', randomArr);
    const randomResult = cleanTheRoom(randomArr);
    console.log(`The numbers' result after cleaning:`, randomResult[0]);
    console.log(`The strings' result after cleaning:`, randomResult[1]);
}

//exampleTest();
randomTest();