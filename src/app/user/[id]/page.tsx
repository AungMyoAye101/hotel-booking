
import Profile from "@/components/user/profile";
import { serverFetch } from "@/hooks/api";
import { User } from "@/types/user-type";



type Params = {
    id: string
}

const page = async ({ params }: { params: Promise<Params> }) => {
    const id = (await params).id;

    const user = await serverFetch<User>(`/users/${id}`);

    console.log(user);

    return (
        <div className="min-h-screen px-4 py-20 max-w-4xl mx-auto">
            <Profile user={user} />
        </div>
    )

}

export default page





