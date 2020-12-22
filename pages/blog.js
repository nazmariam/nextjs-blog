import React from 'react';
import Navigation from "../comoponents/navigation";
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import BlogLayout from "../comoponents/blog-layout";


const Blog = ({ allPostsData }) => (
    <div>
        <BlogLayout main>
            <h1>Blog</h1>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <a href={`/blog/${id}`}>
                            {title}
                        </a>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </BlogLayout>

    </div>
)

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog;
