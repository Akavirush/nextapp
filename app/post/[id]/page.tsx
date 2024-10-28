import Link from 'next/link';

async function getData(id) {
    const response = await fetch('http://localhost:3000/api/article/' + id);
    const result = await response.json();
    return result;
}

const Post = async ({ params: {id} }) => {
    const post = await getData();
    return (
        <main>
            <div className="container">
                <div className="article-info">
                    <h2>{id} Заголовок {post.title}</h2>
                    <h3>Описание {post.body}</h3>
                </div>
            </div>
        </main>
    )
}

export default Post;