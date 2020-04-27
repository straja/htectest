import React from 'react';
import './Article.css';

export class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            source: props.article.source.name,
            author: props.article.author,
            title: props.article.title,
            description: props.article.description,
            url: props.article.url,
            urlToImage: props.article.urlToImage,
            publishedAt: props.article.publishedAt,
            content: props.article.content
        };
    }

    render() {
      return (
        <div className="article">
            <h3>{this.state.title}</h3>
            {this.state.urlToImage ? (
                this.state.urlToImage
                ) : (
                    ''
                    )}
            {this.state.description}
            <a href={this.state.url}>More ></a>
        </div>
      );
    }
  }