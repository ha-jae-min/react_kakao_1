
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {getAccessToken} from "../../api/kakaoAPI.ts";

function KakaoRedirectPage() {

    const [searchParams] = useSearchParams()

    const authCode:string|null = searchParams.get("code")

    useEffect(() => {

        if(authCode != null) {

            getAccessToken(authCode).then(res => {
                console.log(res)
            })
        }


    }, [authCode])

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    );
}


export default KakaoRedirectPage;
