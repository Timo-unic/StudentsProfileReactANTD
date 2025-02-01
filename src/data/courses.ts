type ICourseProfile = {
    id: string;
    groupName: string;
    titleOfCourse: string;
    trener: string;
    startDateOfCourse: Date;
}

export const courses: ICourseProfile[] = [
    {
        id: '1',
        groupName: 'Group 1',
        titleOfCourse: 'Backend Development',
        trener: 'Oleh Chalyi',
        startDateOfCourse: new Date('01-15-2025')
    },
    {
        id: '2',
        groupName: 'Group 2',
        titleOfCourse: 'Backend Development',
        trener: 'Oleh Chalyi',
        startDateOfCourse: new Date('01-25-2025')
    },{
        id: '3',
        groupName: 'Group 3',
        titleOfCourse: 'Backend Development',
        trener: 'Oleh Chalyi',
        startDateOfCourse: new Date('01-30-2025')
    }
]