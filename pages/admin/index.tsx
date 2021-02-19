import AuthCheck from "../../components/AuthCheck";
import Metatags from "../../components/Metatags";

export default function AdminPostsPage({ }) {
    return(
        

        <main>
            <AuthCheck>
            <Metatags title="admin page" />
            <h1>Admin Posts</h1>
            </AuthCheck>
        </main>


    )
}