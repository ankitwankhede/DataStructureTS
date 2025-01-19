export class Stack {
  public items: Array<number> = [];
  public top: number = 0;
  //other methods go here

  constructor() {}
  //Push an item in the Stack
  public push(element: number): void {
    this.items[this.top++] = element;
  }
  //top++, first performs the operation then increment's the value

  //Pop an item from the Stack
  public pop(): number | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.items[--this.top];
  }
  //--top, first decrements the value then performs the operation

  /**
   * get top value from stack
   */
  //Peek top item from the Stack
  peek(): number | undefined {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.top - 1];
  }

  //Is Stack empty
  isEmpty(): boolean {
    return this.top === 0;
  }

  //Clear the Stack
  clear(): void {
    this.top = 0;
  }

  //Size of the Stack
  size(): number {
    return this.top;
  }
}
