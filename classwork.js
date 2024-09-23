let familyMembers = [
    {
        name: 'Ejieke',
        marriedStatus: false,
        numberOfChildren: null,
        education: {
            school: 'ABSU',
            yearOfGraduation: 2023
        }
    },
    {
        name: 'Linda',
        marriedStatus: true,
        numberOfChildren: 0,
        education: {
            school: 'Abia Poly',
            yearOfGraduation: 2025
        }
    }
];

// add child to a family member
const member = familyMembers[0];
console.log(`Adding child to family member ${member.name}`);
if (member.marriedStatus) {
    member.numberOfChildren++;
    console.log('We added a child to you. Your new number of children is ' + member.numberOfChildren)
} else {
    console.log('You are still unmarried; unauthorized addition of child');
}

// determine if member is a graduate
console.log(`Determinig if family member ${member.name} is a graduate`);
if (member.education.yearOfGraduation <= 2024) {
    console.log('Congralations you are a graduate or recently graduated in ' + member.education.yearOfGraduation)
} else {
    console.log('Just calm down, a few more years');
}

// determine if member is due for service year
console.log(`Determinig if family member ${member.name} is due for NYSC`);
if (member.education.yearOfGraduation >= 2021 && member.education.yearOfGraduation <= 2023) {
    console.log('Congralations you are due for NYSC ' + member.education.yearOfGraduation)
} else {
    console.log('You are either an undergraduate or overage');
}