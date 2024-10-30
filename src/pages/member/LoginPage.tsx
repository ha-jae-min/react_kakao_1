import KakaoLoginComponent from "../../components/member/KakaoLoginComponent.tsx";
import SampleMenu from "../../components/menu/SampleMenu.tsx";

function LoginPage() {
    return (
        <div>
            <SampleMenu></SampleMenu>
            <h1>Member Login Page</h1>

            <KakaoLoginComponent></KakaoLoginComponent>
        </div>
    );
}

export default LoginPage;