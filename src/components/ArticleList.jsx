import { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./ArticleList.module.css";

export default class ArticleList extends Component {
    render() {
       // const { articles } = this.props;
        return (
            <div>
            {this.props.articles.map((article) => (
                <div className={css.article} key={article.id}>
                    <h1 className={css.header}>{article.story_title}</h1>
                    <a href={article.story_url} className={css.link}>Go to article</a>
                </div>

            ))}

                {/* {articles.map((article) => (
                    <div className={css.article} key={article.id}>{JSON.stringify(article)}
                    <h1 className={css.header}>{article.story_title}</h1>
                    <p className={css.contents}>{article.value}</p>
                    </div>
                ))} */}
            </div>
        );
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object),
};