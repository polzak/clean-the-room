const cleanTheRoom = (arr) => {

    const compare = (a, b) => {
        return a-b;
    }

    const cleanAfterSort = (sortedArr) => {

        const cleanedArr = [];
        let sameNumberArr = [];

        sortedArr.forEach((el, i, arr) => {
            if (i === 0) { 
                sameNumberArr.push(el); 
            }

            let num = arr[i+1];

            if (i === arr.length - 1) {
                num = undefined;
            }

            if (sameNumberArr.length < 1 || num === sameNumberArr[0]) {
                sameNumberArr.push(num);
            } else {
                if (sameNumberArr.length > 1) {
                    cleanedArr.push(sameNumberArr);
                } else {
                    cleanedArr.push(sameNumberArr[0]);
                }

                sameNumberArr = [];
                if (num !== undefined) {
                    sameNumberArr.push(num);
                }
            }
        });

        return cleanedArr;
    }

    const numberArr = arr.filter((el) => typeof(el) === 'number');
    const stringArr = arr.filter((el) => typeof(el) === 'string');

    numberArr.sort(compare);
    offStringArr = stringArr.map(str => Number(str));
    offStringArr.sort(compare);
    
    const cleanedNumberArr = cleanAfterSort(numberArr);
    const cleanedOffStringArr = cleanAfterSort(offStringArr);

    const cleanedStringArr = cleanedOffStringArr.map(num => {
        if (typeof(num) === 'number') {
            return String(num);
        } else {
            return num.map(el => String(el));
        }
    });

    return [cleanedNumberArr, cleanedStringArr];
};

const exampleArr = [3, 2, 17, "3", 2, 1, "7", 14, "7", 17, 17, 43, 2, 5, "4", "5", "4", "7", "15"];
const result = cleanTheRoom(exampleArr);
console.log(result);
