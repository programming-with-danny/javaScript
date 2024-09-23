//As an admission officer, create a database of incoming students that includes information to help you make better decisions.
let Students_info = [
         {
            firstName: "Chibuike",
            surname: "Chikwado",
            age: 20,
            gender: "Male",
            SateOfOrigin: "Abia",
                  Academic_Record:{
                  WACE: true,
                  Jamb_score: 250,
            },
                  Health_Record: {
                  HIV: null,
                  Blood_group: "O+"
            }
      },
         {
            firstName: "Chika",
            surname: "Chinwendu",
            age: 20,
            gender: "Female",
            SateOfOrigin: "Abia",
                  Academic_Record:{
                  WACE: true,
                  Jamb_score: 250,
            },
                  Health_Record: {
                  HIV: null,
                  Blood_group: "O+"
            }
      }
      
]
console.log(Students_info[0].Academic_Record)
console.log(Students_info[0]);
console.log(Students_info[1])