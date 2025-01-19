import { Stack } from "./Stack/Stack";

const stack: Stack = new Stack();
stack.push(1);
stack.push(12);
stack.push(13);
stack.push(17);

console.log(stack.peek());
