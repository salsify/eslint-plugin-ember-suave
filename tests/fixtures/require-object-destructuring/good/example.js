/* eslint-disable prefer-destructuring */
let { foo } = SomeThing;
let { bar } = SomeThing.Baz;

let someVariableName = SomeThing.propertyWithDifferentName;

const { get } = SomeThing;
const { set } = SomeThing;

const { val } = SomeThing['some.key'];
/* eslint-enable prefer-destructuring */
