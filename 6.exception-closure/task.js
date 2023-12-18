function parseCount(incomingValue) {
  const parsedValue = Number.parseFloat(incomingValue);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(incomingValue) {
  try {
    let result = parseCount(incomingValue);
    return result;
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    const sidesLengths = this.a + this.b + this.c;
    return sidesLengths;
  }

  get area() {
    const semiPerimeter = this.perimeter / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
return Number(area.toFixed(2));
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
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}


