import { component$, Resource } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useEndpoint } from "@builder.io/qwik-city";

interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const onGet: RequestHandler<Article> = async ({params}) => {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await r.json()
    return data
};
export default component$(() => {

    const endpoint = useEndpoint<Article>();

    return <div>
        <Resource
            value={endpoint}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Error</div>}
            onResolved={(data) =>(
                <>
                    <div>{data.title}</div>
                </>
            )} />
    </div>
});