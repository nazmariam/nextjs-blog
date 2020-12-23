import BlogLayout from '../../comoponents/blog-layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import React from "react";
import styles from "../../styles/layout.module.scss";

export default function Post({ postData }) {
    return (

        <div>
            <BlogLayout article>
                <img
                    src={postData.image}
                    className={`${styles.headerImage}`}
                    alt={postData.title}
                />
                <article>
                    <h1 className={`${styles.headerTitle}`}>{postData.title}</h1>
                    <strong>{postData.date}</strong>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </BlogLayout>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
