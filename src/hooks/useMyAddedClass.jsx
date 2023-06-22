import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyAddedClass = () =>{
    const {user, loading} = useAuth();
    //const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: addedClass = [] } = useQuery({
        queryKey: ['addClass', user?.email],
        enabled: !loading,
        // queryFn: async () =>{
        //     const response = await fetch(`https://b7a12-summer-camp-server-side-hazel.vercel.app/selected-class?email=${user?.email}`, {
        //         headers:{
        //             authorization: `bearer ${token}`

        //         }
        //     })
        //     return response.json();
        // }
        queryFn: async () =>{
            const response = await axiosSecure.get(`/my-classes?email=${user?.email}`)
            console.log(response.data)
            return response.data;
        }
      })

      return [addedClass, refetch]
}

export default useMyAddedClass;