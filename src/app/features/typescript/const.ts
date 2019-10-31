export class DemoConst {

    public testConst() {
        const treshold = 2;
        // treshold = 3; // type error
        console.log(treshold);
    }

    public mutateObject(): void {
        const myReference = {};
        console.log(myReference);

        myReference['myPropriety'] = 'hello';
        console.log(myReference);
    }

    public makeObjectImmutable(): void {
        const immutableObject = Object.freeze({ immutableProperty: 2 });
        // immutableObject.newProperty = 123; // compile error
        // immutableObject.immutableProperty = 3; // compile error
        console.log(immutableObject);
    }
}
