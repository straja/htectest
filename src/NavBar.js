import React from 'react';
import { Article } from './Article';
import './NavBar.css';


export class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            articles: [], 
            total: 0 
        };
    }

    topNews = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=97693985ef064b288c21f8b21f174e37")
        .then(res => res.json())
        .then(data  => this.setState({
                articles: data.articles,
                total: data.totalResults
            })
        );
    }

    render() {
      return (
        <div>
            <nav>
                <button onClick={this.topNews}>Top News</button>
                <button onClick={this.categories}>Categories</button>
                <button onClick={this.search}>Search</button>
                <button className="right">US</button>
                <button className="right">GB</button>
            </nav>
            <div className="content">
                {
                    this.state.articles.map((article,i) =>
                        <Article key={i} article={article} />)
                }
            </div>
        </div>
      );
    }
  }