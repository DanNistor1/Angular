import { DemoPromises } from './promises';
import { Student } from './oop/student';
import { Person } from './oop/person';
import { DemoIteration } from './iteration';
import { DemoEnums } from './enums';
import { DemoSets } from './set';
import { DemoMaps } from './maps';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoFatArrow } from './fat-arrows';
import { DemoStrings } from './string';
import { DemoVariables } from './variables';
import { DemoConst } from './const';
import { DemoLet } from './let';
import { Signal } from './signal';
import { Component, OnInit } from '@angular/core';
import { Role } from './role';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {

  constructor() {

    // const demoEnum: DemoEnums = new DemoEnums();
    // demoEnum.enumContent();
    // demoEnum.iterateEnum();
    // demoEnum.getKeysOfStringEnum();
    // demoEnum.iterateEnumKeys();

    // const demoLet: DemoLet = new DemoLet();
    // demoLet.testLocalVariables();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.testConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoString: DemoStrings = new DemoStrings();
    // demoString.templateString();
    // demoString.variableSubstitution();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoObjectDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    // demoObjectDestructuring.objectDestructuring();

    // const demoMap: DemoMaps = new DemoMaps();
    // demoMap.testMap();

    // const demoSets: DemoSets = new DemoSets();
    // demoSets.testSets();

    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInObject();
    // demoIteration.testForInArray();
    // demoIteration.testForOf();
    // demoIteration.testForEach();

    // const demoOOP1: Person = new Person('Dan', 'Nistor');
    // console.log(demoOOP1.name());
    // console.log(demoOOP1.whoAreYou());
    // const demoOOP2: Person = new Student('Dan', 'Nistor', 'algebra');
    // console.log(demoOOP2.whoAreYou()); // call whoAreYou() method from Student class wich override method from Person

    // const demoPromises: DemoPromises = new DemoPromises();
    // demoPromises.testSuccessPromise();
    // demoPromises.testErrorPromise();
    // demoPromises.promiseChainability();
    // demoPromises.promiseErrorHandling();
    // demoPromises.promiseInTypescript();

  }
}
