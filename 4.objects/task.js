function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks){
    let addMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      if (this.marks === undefined) {
      console.log("студент отчислен");
      break;
    } else {
      this.marks.push(Number(marks[i]));
     }
    }
    return addMarks;
  } 
  
  Student.prototype.getAverage = function () {
    if(typeof this.marks === 'undefined' || this.marks.length === 0) {
      return 0;
    } else {
      return this.marks.reduce(function(a, b) { return a + b; 
    }, 0) / this.marks.length;
   }
  }
  
  Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }