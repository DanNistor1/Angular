export class DemoSets {

    public testSets(): void {

        let set1 = new Set();
        set1.add('APPLE');
        set1.add('ORANGE');
        set1.add('MANGO');


        let set2 = new Set()
            .add('APPLE')
            .add('ORANGE')
            .add('MANGO');

        let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

        // has
        console.log('has A: ' + set1.has('APPLE'));

        // delete
        set1.delete('APPLE');

        // size
        console.log('map size: ' + set1.size);

        // clear
        set1.clear();
        console.log('map size = ' + set1.size);


        for (let entry of set2) {
            console.log(entry);
        }

    }

}
