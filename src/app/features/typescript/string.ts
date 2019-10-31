export class DemoStrings {

    public templateString(): void {
        const multilineString = `
                                this
                                is
                                a multi-line
                                string
                                `;

        console.log(multilineString);
    }

    public variableSubstitution(): void {
        const firstName = 'lebron';
        const lastName = 'james';

        const fullName = `This is ${firstName} ${lastName}`;
        console.log(fullName);
    }

}
