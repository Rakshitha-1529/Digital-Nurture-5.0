function CourseDetails() {

    const courses = [
        {
            courseName: "Angular",
            date: "4/5/2021"
        },
        {
            courseName: "React",
            date: "6/3/2021"
        }
    ];

    return (
        <div>
            <h1>Course Details</h1>

            {
                courses.map((course, index) => (
                    <div key={index}>
                        <h2>{course.courseName}</h2>
                        <h4>{course.date}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseDetails;