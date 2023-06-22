import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnrollClass = () =>{
    const {user, loading} = useAuth();
    //const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: enrollClass = [] } = useQuery({
        queryKey: ['enrollClass', user?.email],
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
            const response = await axiosSecure.get(`/payments?email=${user?.email}`)
            return response.data;
        }
      })

      return [enrollClass, refetch]
}

export default useEnrollClass;