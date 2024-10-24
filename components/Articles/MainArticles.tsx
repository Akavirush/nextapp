import Link from 'next/link';

async function getData() {
    const response = await fetch('http://localhost:3000/api/articles');
    const result = await response.json();
    return result;
}

export async function MainArticles () {
    const articles = await getData();
    return (
        <ul>
            {articles.map((article:any) => (
                <li key={article.id}>
                    <Link href={`/post/`+ article.id}>{article.title}</Link>
                </li>
            ))}
        </ul>
    )
}