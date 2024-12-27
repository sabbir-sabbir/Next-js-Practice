export default function Docs({params}: {
    params: {
        slug: string[]
    }
}) {
    if(params.slug.length === 2) {
        return (
            <div><h1>SABBIR SABBIR {params.slug[0]} and concepts {params.slug[1]}</h1></div>
        );
    } else if (params.slug.length === 1) {
        return (
            <div><h1>viewing docs for feature {params.slug[0]}</h1></div>
        )
    }
    return <div><h1>Docs home Page</h1></div>
}