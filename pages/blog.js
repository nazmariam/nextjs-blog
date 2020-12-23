import React from 'react';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import BlogLayout from "../comoponents/blog-layout";
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';


const Blog = ({ allPostsData, t }) => (
    <div>
        <BlogLayout main>
            <h1>{t('subtitle')}</h1>
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
            allPostsData,
            namespacesRequired: ['blog'],
        },
    }
}

Blog.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('blog')(Blog)
