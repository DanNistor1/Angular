export class DemoIteration {

    // ES5
    public testFor(): void {
        console.log('for:');
        var array = ['A', 'B', 'C'];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }

    // for objects for...in return properties
    // for...of do not working (objects are not iterable)
    public testForInObject(): void {
        console.log('for in:');
        var myObject = { a: 1, b: 2, c: 3 };
        // tslint:disable-next-line: forin
        for (let property in myObject) {
            console.log(property);
        }
    }

    // for...in return index (valabil pentru array, list, string)
    public testForInArray(): void {
        console.log('for in array:');
        const myArray = [10, 20, 30];
        // tslint:disable-next-line: forin
        for (let index in myArray) {
            console.log(index + '-' + typeof index);
        }
    }

    // for...of return elements (valabil pentru array, list, string)
    public testForOf(): void {
        console.log('for of:');
        const myArray = [10, 20, 30];
        for (let value of myArray) {
            console.log(value + '-' + typeof value);
        }
    }

    // forEach return elements
    public testForEach(): void {
        console.log('for each:');
        const myArray = [10, 20, 30];
        myArray.forEach(element => console.log(element));
    }
}
