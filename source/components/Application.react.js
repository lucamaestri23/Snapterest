var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({
    getInitialState : function() {
        return {
            collectionTweets: {}
        };
    },

    addTweetCollection: function (tweet) {
        var collectionTweets = this.state.collectionTweets;

        collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets: collectionTweets
        });
    },

    removeTweetFomCollection: function(tweet) {
        var collectionTweets = this.state.collectionTweets;

        delete collectionTweets[tweet.id];

        this.setState({
            collectionTweets: collectionTweets
        });
    },

    removeAllTweetsFrmCollection: function() {
        this.setState({
            collectionTweets: {}
        });
    },

    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection={this.addTweetCollection} />
                    </div>
                    <div className="col-md-8">
                        <Collection 
                            tweets={this.state.collectionTweets}
                            onRemoveTweetFromCollection ={this.removeTweetFomCollection}
                            onRemoveAllTweetsFromCollection ={this.removeAllTweetsFomCollection} />

                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Application;