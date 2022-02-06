import React from 'react';
import MovieList from './MovieList';
import Rating from './rating';

export default class Movie extends React.Component {
    render() {
        return (
            <div>
                <MovieList />
                <Rating />
            </div>
        );
    }
}