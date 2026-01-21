
import Profile from "@/components/user/profile";
import { serverFetch } from "@/hooks/api";
import { APIResponse } from "@/types";
import { User } from "@/types/user-type";



type Params = {
    id: string
}

const page = async ({ params }: { params: Promise<Params> }) => {
    const id = (await params).id;

    const data = await serverFetch<APIResponse<{ user: User }>>(`/users/${id}`);

    return (
        <div className="min-h-screen px-4 py-20 max-w-4xl mx-auto">
            <Profile id={id} />
        </div>
    )

}

export default page





