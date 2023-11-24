import { faker } from "@faker-js/faker";

export interface FakeTableData {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fakeTableData: FakeTableData[] = Array(1000)
  .fill(null)
  .map(() => ({
    id: faker.database.mongodbObjectId(),
    age: faker.number.int({ min: 18, max: 77 }),
    createdAt: faker.date.anytime(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    gender: faker.person.gender(),
    updatedAt: faker.date.anytime(),
  }));
