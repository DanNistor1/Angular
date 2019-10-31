import { Role } from './role';
import { Signal } from './signal';

export class DemoEnums {

    // enum content
    public enumContent(): void {
        console.log(Role);
        console.log(Signal);
    }

    // iterate numeric enums
    public iterateEnum(): void {
        console.log('iterate enum member name: ');

        for (const role in Role) {
            if (isNaN(Number(role))) {
                console.log(role);
            }
        }

        // for (const signal in Signal) {
        //     if (isNaN(Number(signal))) {
        //         console.log(signal);
        //     }
        // }
    }

    // iterate string enums
    public getKeysOfStringEnum(): void {
        console.log('iterate enum member name: ');

        // Object.keys(Role).forEach(key => console.log(key));

        Object.keys(Signal).forEach(key => console.log(key));
    }

    public iterateEnumKeys() {
        console.log('iterate enum member value: ');

        Object.keys(Role)
            .filter(key => !isNaN(Number(Role[key])))
            .forEach(key => console.log(Role[key]));

        Object.keys(Signal)
            .filter(key => isNaN(Number(Signal[key])))
            .forEach(key => console.log(Signal[key]));
    }
}
