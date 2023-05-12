import AllPosts from "./AllPosts";
import Header from "./Header";

function Home() {
    return (
        <>
            <Header />
            <div className="pageBody">
                <AllPosts />
            </div>
        </>
    );
}

export default Home;