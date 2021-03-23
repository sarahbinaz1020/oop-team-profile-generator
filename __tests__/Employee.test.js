const { TestScheduler } = require("@jest/core");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        test("Can initialize an employee object", () => {
            const e = new Employee();
            expect(typeof e).toBe("object");
        });

        test("Can set name attribut with constructor", () => {
            const name = "Clark";
            const e = new Employee(name);
            expect(e.name).toBe(name);
        });

        test("Can set email attribute with constructor", () => {
            const email = "sarahbinaz1020@gmail.com";
            const e = new Employee ("Nick", id);
            expect(e,id).toBe(id);
        });
    })
})

describe("getters", () => {
    test("Can get name ")
})