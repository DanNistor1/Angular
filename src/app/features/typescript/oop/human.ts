export interface Human {
    firstName: string;
    lastName: string;

    // ? denote optional properties
    name?: () => {};
    isLate?: (time: Date) => {};

    // alternative for methods
    // name?(): {};
    // isLate?(time: Date): {};
}
