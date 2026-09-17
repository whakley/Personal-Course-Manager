import courses from './data/samplecourses'
function CourseList(): React.JSX.Element {
    
    return (
    <>
    <ul>
        {courses.map((course) => <button key= {course.id}> {course.name}</button> )}
    
    </ul>
    </>
    )
}
export default CourseList