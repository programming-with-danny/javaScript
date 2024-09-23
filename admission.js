// Database of 10 students
const students = [
    {
      name: "Dee john",
      state: "Lagos",
      school: "University of Lagos",
      age: 18,
      jambScore: 250
    },
    {
      name: "Jane Smith",
      state: "Ogun",
      school: "Obafemi Awolowo University",
      age: 19,
      jambScore: 245
    },
    {
      name: "Michael Johnson",
      state: "Rivers",
      school: "University of Port Harcourt",
      age: 20,
      jambScore: 220
    },
    {
      name: "Mary Adams",
      state: "Abuja",
      school: "University of Abuja",
      age: 21,
      jambScore: 260
    },
    {
      name: "Chris Oke",
      state: "Enugu",
      school: "University of Nigeria Nsukka",
      age: 18,
      jambScore: 235
    },
    {
      name: "Amaka Okeke",
      state: "Anambra",
      school: "Nnamdi Azikiwe University",
      age: 19,
      jambScore: 240
    },
    {
      name: "Bola Bello",
      state: "Oyo",
      school: "University of Ibadan",
      age: 22,
      jambScore: 275
    },
    {
      name: "Halima Musa",
      state: "Kano",
      school: "Bayero University Kano",
      age: 20,
      jambScore: 230
    },
    {
      name: "Samuel Kalu",
      state: "Benue",
      school: "Benue State University",
      age: 23,
      jambScore: 225
    },
    {
      name: "Fatima Sani",
      state: "Kaduna",
      school: "Ahmadu Bello University",
      age: 19,
      jambScore: 255
    }
  ];
  
  // Admission criteria
  const requiredScore = 230;
  
  // Check eligibility for each student
  students.forEach(student => {
    if (student.jambScore > requiredScore) {
      console.log(`${student.name} is eligible for admission.`);
    } else {
      console.log(`${student.name} is not eligible for admission.`);
    }
  });
  