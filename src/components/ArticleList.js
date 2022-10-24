import Article from "./Article"

export default function ArticleList({posts}){
    const post = posts.map((p)=>{
        return <Article key={p.id} title={p.title} date={p.date} preview={p.preview}/>
    })
    return(
        <main>
            {post}
        </main>
    )
}