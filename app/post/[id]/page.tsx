import { GetServerSideProps } from 'next';
import Link from 'next/link';

async function getData(id: string) {
    const response = await fetch(`http://localhost:3000/api/article/${id}`);
    const result = await response.json();
    return result;
}

interface PostProps {
    params: {
        id: string;
    };
}

const Post: React.FC<PostProps> = async ({ params: { id } }) => {
    const article = await getData(id);
    return (
        <main>
            <div className="container">
                <div className="article-info">
                    <h2>{id} Заголовок {article.title}</h2>
                    <h3>Описание {article.body}</h3>
                </div>
            </div>
        </main>
    );
};

export default Post;