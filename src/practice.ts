// task 1

type TConcat = (a: string, b: string) => string

const concat: TConcat = (str1, str2) => {
  return `${str1} ${str2}`
}

// function concat(str1: string, str2: string) {
//   return `${str1} ${str2}`
// }

const concatResult = concat('Hello', 'World')

// task 2

// type TMyHometask = {
//   howIDoIt: string,
//   simeArray: Array<number | string>
// }

interface IMyHometask {
  howIDoIt: string,
  simeArray: Array<number | string>,
  withData?: IMyHometask[]
  // withData: TMyHometask[]
}

const myHomeTask: IMyHometask = {
  howIDoIt: 'I Do It Well',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: "I Do It Well", simeArray: ["string one", 23] }]
}

// task 3

const thirdArray: TMyArray<number> = [1, 2, 3]

interface TMyArray<T> {
  [N: number]: T

  reduce(fn: (accumulator: T, value: T, index: number, array: TMyArray<T>) => T): T
  reduce<U>(fn: (accumulator: U, value: T, index: number, array: TMyArray<T>) => U, initialValue: U): U
}

thirdArray.reduce((acc, val) => acc + val)
thirdArray.reduce((acc, val) => acc + val, 0)

// task 4

interface IHomeTask {
  data: string
  numbericData: number
  date: Date
  externalData: {
    basis: number
    value: string
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}
