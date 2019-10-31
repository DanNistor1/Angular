export class DemoFatArrow {

    public testFatArrow(): void {
        setTimeout(() => {
            console.log('setTimeOutCalled');
        }, 1000);
    }

    public testFatArrowWithArguments() {
        // ES5
        // Anonymous function
        var multiply1 = function (a, b) {
            return a * b;
        };
        console.log(multiply1(1, 2));

        // Named function
        function add(a, b) {
            return a * b;
        }
        console.log(add(2, 3));

        // typescrit
        const newMultiply = (a, b) => a * b;
        console.log(newMultiply); // print body function: (a, b) => a * b
    }

}
