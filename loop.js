let students = [
    {
        studentName: 'Obeni Daniel',
        studentId: 'STUD0001',
        studentGrades: {
            maths: 89,
            english: 78,
            chemistry: 69,
            physics: 75,
        },
    },
    {
        studentName: 'Okoro Chukwuka',
        studentId: 'STUD0002',
        studentGrades: {
            maths: 78,
            english: 80,
            chemistry: 65,
            physics: 79,
        },
    },
    {
        studentName: 'Egwu Mary',
        studentId: 'STUD0003',
        studentGrades: {
            maths: 85,
            english: 70,
            chemistry: 71,
            physics: 75,
        },
    },
    {
        studentName: 'Obia Emmanuel',
        studentId: 'STUD0004',
        studentGrades: {
            maths: 70,
            english: 78,
            chemistry: 60,
            physics: 67,
        },
    },
    {
        studentName: 'Obia Grace',
        studentId: 'STUD0005',
        studentGrades: {
            maths: 45,
            english: 78,
            chemistry: 40,
            physics: 50,
        },
    },
    {
        studentName: 'Ijeoma Jonathan',
        studentId: 'STUD0006',
        studentGrades: {
            maths: 30,
            english: 30,
            chemistry: 45,
            physics: 40,
        },
    },
    {
        studentName: 'Mgbebu Ugochukwu',
        studentId: 'STUD0007',
        studentGrades: {
            maths: 60,
            english: 78,
            chemistry: 50,
            physics: 35,
        },
    },
    {
        studentName: 'Igbokwe Joy',
        studentId: 'STUD0008',
        studentGrades: {
            maths: 50,
            english: 78,
            chemistry: 40,
            physics: 39,
        },
    },
    {
        studentName: 'Irem Felicia',
        studentId: 'STUD0009',
        studentGrades: {
            maths: 89,
            english: 79,
            chemistry: 70,
            physics: 75,
        },
    },
    {
        studentName: 'Abbah Sunday',
        studentId: 'STUD0010',
        studentGrades: {
            maths: 90,
            english: 80,
            chemistry: 79,
            physics: 56,
        },
    },
]
// //function to return a student's score
// function returnSubjecttScore(studentId, subject) {
//     for (let index in students) {
//         var student = students[index];
//         const score = student.studentGrades[subject];
//         if (students[index].studentId == studentId) {
//             return `${student.studentName}'s score in ${subject} is ${student.studentGrades[subject]}`;
//         }
//     }
    
// }
// let output = returnSubjecttScore('STUD0008', 'chemistry')
// console.log(output);
// console.log('--------------------------------------------');


//function to return a student's score
// function returnSubjecttScore(studentId) {
//     for (let index in students) {
//         if (students[index].studentId === studentId) {
//             let student = students[index];
//             var total = 0;
//             for (let grade in student.studentGrades) {
//                 total += student.studentGrades[grade];
               
//             }
//         } return `${students.studentName}'s total score is ${total}`
        
//     }
    
// }
// let output = returnSubjecttScore('STUD0008',)
// console.log(output);
// console.log('--------------------------------------------');

// //function to return the total score of each student's grade
// function returnTotalScore(studentId) {
//     for (let i in students) {
//         if (students[i].studentId == studentId) {
//             const student = students[i];
//             let totalScore = 0;
//             for (let j in student.studentGrades) {
//                 totalScore += student.studentGrades[j];
//             }

//             return `Total score is ${totalScore}`;
//         }
//     }
//     return;
// }

// // Example usage:
// console.log(returnTotalScore('STUD0003'));
// console.log(returnTotalScore('STUD0006'));
// console.log(returnTotalScore('STUD0009'));

// //function to return a student's average score
// function returnStudentAverageScore(studentId) {
//     for (let i in students) {
//         if (students[i].studentId === studentId) {
//             const student = students[i];
//             const grades = Object.values(students[i].studentGrades);
//             let totalScore = 0;
//             for (let grade in student.studentGrades) {
//                 totalScore += student.studentGrades[grade];
//             }
//             const averageScore = totalScore / grades.length;

//             return `${student.studentName}'s average score is ${averageScore.toFixed(2)}`;
//         }
//     }
//     return;
// }

// console.log(returnStudentAverageScore('STUD0001')); 
// console.log(returnStudentAverageScore('STUD0005')); 
// console.log(returnStudentAverageScore('STUD0010')); 


//function to return the student with the highest average score
function getAllStudentsAverage() {
    let totalAllStudents = 0;
    let totalStudentsCount = 0;
    let highestAverageStudent = null;
    let highestAverage = 0;
    for (let index in students) {
        const student = students[index];
        let totalScore = 0;
        const grades = Object.values(students[index].studentGrades);
        for (let grade in student.studentGrades) {
            totalScore += student.studentGrades[grade];
        }
        const averageScore = totalScore / grades.length;
        totalAllStudents += averageScore;
        totalStudentsCount++;
        if (averageScore > highestAverage) {
            highestAverage = averageScore;
            highestAverageStudent = student;
        }
    }
    return {
        highestAverageStudent: highestAverageStudent.studentName,
        highestAverage: highestAverage.toFixed(2),
    };
}
const result = getAllStudentsAverage();
console.log(`The student with the highest average score is ${result.highestAverageStudent} with ${result.highestAverage}`);

