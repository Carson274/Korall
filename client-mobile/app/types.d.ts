export interface Word {
  name: Name
  definition: string
  examples: Example[]
}

export interface Name {
  [key: string]: string
  eng: string
  kor: string
}

export interface Example {
  eng: string
  kor: string
}