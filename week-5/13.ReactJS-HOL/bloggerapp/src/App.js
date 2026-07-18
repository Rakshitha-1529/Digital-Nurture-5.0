import "./App.css";

import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {

    const show = true;

    return (

        <div className="container">

            <div className="column">
                {show && <CourseDetails />}
            </div>

            <div className="column">
                {show ? <BookDetails /> : null}
            </div>

            <div className="column">
                {!false && <BlogDetails />}
            </div>

        </div>

    );

}

export default App;