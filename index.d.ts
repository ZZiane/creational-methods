declare module "creational-methods" {
  export const Getter: any;
  export const Setter: any;
  export const Builder: <T extends new (...args: any[]) => any>(target: T) => T;
  export const With: <T extends new (...args: any[]) => any>(target: T) => T;
}
