import React from 'react';
import Reviews from './Reviews';

export default class MovieList extends React.Component {
    state = {
        msg: "",
        reviewList: [],
    }
    handleCallback = (reviewData) =>{
        this.setState({msg: reviewData})
    }
    render() {
        const {msg, reviewList} = this.state;
        reviewList.push({"Howl's Moving Castle": msg})
        console.log(reviewList);
        return(
            <div>
                <div className="container">
                <img className="img-fluid img-thumbnail" src="https://m.media-amazon.com/images/I/51+FWnABEzL._AC_.jpg" alt="Howl's Moving Castle Banner"></img>
                <iframe className="trailer" width="900" height="510" src="https://www.youtube.com/embed/iwROgK94zcM" title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>
                </div>
                <div>
                    <p className="fs-4">A unconfident young woman named Sophie is given an old body by a spiteful witch. <br></br>A young man named Howl and his companions with his walking castle, <br></br>could this young man and his castle be the key to getting her old body back.</p>
                    <hr></hr>
                    <p id="director">Director: <a href="https://en.wikipedia.org/wiki/Hayao_Miyazaki">Hayao Miyazaki</a></p>
                    <hr></hr>
                    <p id="novel">Based on the fantasy novel written by <a href="https://en.wikipedia.org/wiki/Diana_Wynne_Jones">Diana Wynn Jones</a></p>
                    <hr></hr>
                </div>
                <div className="newreview">{msg}</div>   
                <Reviews parentCallback = {this.handleCallback}/>     
            </div>
            
        );
    }
}