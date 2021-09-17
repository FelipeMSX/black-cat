interface IOperation {
  X: number;
  Y: number;
  Calcule(): number;
}

class Add implements IOperation {
  X: number;

  Y: number;

  Calcule = () => this.X + this.Y;
}

class Multiply implements IOperation {
  X: number;

  Y: number;

  Calcule = () => this.X * this.Y;
}

class Divide implements IOperation {
  X: number;

  Y: number;

  Calcule = () => this.X / this.Y;
}

type Constructor<T> = {
  new (...args: any[]): T;
  readonly prototype: T;
};

class ContainerAssembly {
  implementations: Constructor<IOperation>[] = [];

  GetImplementations(): Constructor<IOperation>[] {
    return this.implementations;
  }

  CreateInstance(name: string) {
    return new this.implementations[0]();
  }

  register<T extends Constructor<IOperation>>(ctor: T) {
    this.implementations.push(ctor);
    return ctor;
  }
}
