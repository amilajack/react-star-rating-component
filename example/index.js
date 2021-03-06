import React from 'react';
import ReactDOM from 'react-dom';

import StarRatingComponent from '../';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1,
            rating_custom_icon: 6
        };
    }

    onStarClick(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating: nextValue});
    }

    onStarClickCustomIcon(nextValue, prevValue, name) {
        console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
        this.setState({rating_custom_icon: nextValue});
    }

    render() {
        return (
            <div style={{marginLeft: 20}}>
                <h2>ReactStarRatingComponent</h2>

                <h3>Editable:</h3>
                <div style={{fontSize: 24}}>
                    <StarRatingComponent name="app1" />
                </div>

                <h3>Editable with handlers (Rating from state is {this.state.rating}):</h3>
                <div style={{fontSize: 26}}>
                    <StarRatingComponent
                        name="app2"
                        starCount={8}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>

                <h3>Editable (with custom icons):</h3>
                <div style={{fontSize: 20}}>
                    <StarRatingComponent
                        name="app3"
                        starCount={10}
                        value={this.state.rating_custom_icon}
                        onStarClick={this.onStarClickCustomIcon.bind(this)}
                        starColor="#f00"
                        renderStarIcon={() => <span></span>}
                    />
                </div>

                <h3>Non-Editable:</h3>
                <div style={{fontSize: 18}}>
                    <StarRatingComponent
                        name="app4"
                        editing={false}
                        starCount={10}
                        value={8}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
