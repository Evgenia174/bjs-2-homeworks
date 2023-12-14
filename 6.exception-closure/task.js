////////////// 1 //////////////
function parseCount(incomingValue) {
    try {
      const parsedValue = Number.parseFloat(incomingValue); 
      if(isNaN(Number.parseFloat(incomingValue))) { 
       throw new Error("Невалидное значение"); 
   } return parsedValue; 
} catch(err) {
   console.error(err); 
  } 
}
  
function validateCount(incomingValue) {
    try {
      const parsedValue = parseCount(incomingValue);
      if (typeof parsedValue === "string") {
        return parsedValue;
      } else {
        return parsedValue;
      }
    } catch (error) {
      return "Ошибка при парсинге числа";
    }
}

////////// 2 ////////////
class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (
        this.a + this.b < this.c ||
        this.a + this.c < this.b ||
        this.b + this.c < this.a
      ) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    get perimetr() {
      return this.a + this.b + this.c;
    }
    get area() {
        const semiPerimeter = (this.a + this.b + this.c) / 2;
        return Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        }
    }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimetr() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }
