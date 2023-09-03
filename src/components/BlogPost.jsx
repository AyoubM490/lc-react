import {useParams} from "react-router-dom";

export function BlogPost() {
    const params = useParams();
    return (
        <div className={"container"}>
            This is blog post {params.id}
        </div>
    );
}