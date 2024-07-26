import Login from "./login";
import SignUp from "./signup";

function SecondSection() {
    return (
        <>
            <main className="flex min-h-screen justify-center authContainer" style={{ margin: "10em 0em" }}>
                <Login />
                <SignUp />
            </main>
        </>
    );
}

export default SecondSection;