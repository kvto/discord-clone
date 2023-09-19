import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

const ServerIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { serverId: string};
}) => {
    const profile = await currentProfile();

    if(!profile){
        return redirectToSignIn();
    }
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default ServerIdLayout;