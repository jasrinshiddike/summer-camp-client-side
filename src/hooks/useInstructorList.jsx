import { useEffect, useState } from "react";

const useInstructorList = () =>{
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-hazel.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false);
            })
    }, [])
    return [instructors, loading]

}
export default useInstructorList;