const calculateAge = (birth: Date) => {
    const today = new Date();

    const age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        return age - 1;
    }

    return age
}



export const user ={
    firstName: "Kévin",
    lastName: "Grondin",
    age : calculateAge(new Date('1995-10-29')),
}